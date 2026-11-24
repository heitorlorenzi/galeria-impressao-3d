import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import SecaoModelos from './components/SecaoModelos'
import SecaoFilamentos from './components/SecaoFilamentos'
import Sobre from './components/Sobre'
import Footer from './components/Footer'
import { URL_MODELOS } from './data/modelos'
import type { Modelo } from './data/modelos'
import { filamentos } from './data/filamentos'

const materiais = ['Todos', 'PLA', 'PETG', 'ABS']

// Desafio Persistência local: chave onde os favoritos ficam salvos no navegador
const CHAVE_FAVORITOS = 'printhub-favoritos'

// Lê os favoritos salvos no localStorage; se não houver nada (ou estiver inválido), começa vazio
function lerFavoritosSalvos(): number[] {
  try {
    const salvos = localStorage.getItem(CHAVE_FAVORITOS)
    return salvos ? JSON.parse(salvos) : []
  } catch {
    return []
  }
}

function App() {
  // Estado 1: menu do celular aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false)

  // Estado 2: material escolhido no filtro da listagem principal
  const [filtroMaterial, setFiltroMaterial] = useState('Todos')

  // Estado 3: ids dos modelos marcados como favoritos.
  // O valor inicial vem do localStorage (a função roda só na primeira renderização)
  const [favoritos, setFavoritos] = useState<number[]>(() => lerFavoritosSalvos())

  // Sempre que os favoritos mudam, salva a lista no localStorage
  useEffect(() => {
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos))
  }, [favoritos])

  // Estado 8 (desafio Busca): texto digitado no campo de busca
  const [busca, setBusca] = useState('')

  // Estado 4 (Fase 4): modelos que chegam do JSON externo.
  // Começa como vetor vazio e é tipado como vetor de Modelo.
  const [modelos, setModelos] = useState<Modelo[]>([])

  // Estado 5 (Fase 4): true enquanto os dados ainda não chegaram
  const [carregando, setCarregando] = useState(true)

  // Estado 6 (Fase 4): mensagem de erro para o usuário ('' quando não há erro)
  const [erro, setErro] = useState('')

  // Estado 7 (Fase 4): conta as tentativas; quando muda, o useEffect busca de novo
  const [tentativa, setTentativa] = useState(0)

  // Busca os modelos quando a página aparece e de novo a cada "Tentar novamente"
  useEffect(() => {
    async function buscarModelos() {
      setCarregando(true)
      setErro('')
      try {
        const resposta = await fetch(URL_MODELOS)

        // O fetch só falha sozinho sem conexão; erro 404 ou 500 precisa ser checado aqui
        if (!resposta.ok) {
          throw new Error(`Erro HTTP ${resposta.status}`)
        }

        const dados: Modelo[] = await resposta.json()
        setModelos(dados)
      } catch {
        setErro('Não foi possível carregar os modelos. Verifique sua conexão e tente novamente.')
      } finally {
        // Deu certo ou deu erro: a requisição terminou, então esconde o "carregando"
        setCarregando(false)
      }
    }

    buscarModelos()
  }, [tentativa])

  function alternarFavorito(id: number) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favoritoId) => favoritoId !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  // Lista mostrada na tela: calculada a partir dos estados, sem guardar em outro estado.
  // O modelo aparece se passar no filtro de material E na busca pelo nome.
  const modelosFiltrados = modelos.filter((modelo) => {
    const passaNoMaterial = filtroMaterial === 'Todos' || modelo.material === filtroMaterial
    const passaNaBusca = modelo.nome.toLowerCase().includes(busca.trim().toLowerCase())
    return passaNoMaterial && passaNaBusca
  })

  return (
    <div className="app">
      <Header
        menuAberto={menuAberto}
        onAlternarMenu={() => setMenuAberto(!menuAberto)}
        onFecharMenu={() => setMenuAberto(false)}
      />

      <main>
        <Hero />
        <SecaoModelos
          modelos={modelosFiltrados}
          carregando={carregando}
          erro={erro}
          onTentarNovamente={() => setTentativa(tentativa + 1)}
          materiais={materiais}
          filtroAtivo={filtroMaterial}
          onFiltrar={setFiltroMaterial}
          busca={busca}
          onBuscar={setBusca}
          favoritos={favoritos}
          onFavoritar={alternarFavorito}
        />
        <SecaoFilamentos filamentos={filamentos} />
        <Sobre />
      </main>

      <Footer />
    </div>
  )
}

export default App
