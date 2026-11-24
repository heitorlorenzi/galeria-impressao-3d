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

function App() {
  // Estado 1: menu do celular aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false)

  // Estado 2: material escolhido no filtro da listagem principal
  const [filtroMaterial, setFiltroMaterial] = useState('Todos')

  // Estado 3: ids dos modelos marcados como favoritos
  const [favoritos, setFavoritos] = useState<number[]>([])

  // Estado 4 (Fase 4): modelos que chegam do JSON externo.
  // Começa como vetor vazio e é tipado como vetor de Modelo.
  const [modelos, setModelos] = useState<Modelo[]>([])

  // Estado 5 (Fase 4): true enquanto os dados ainda não chegaram
  const [carregando, setCarregando] = useState(true)

  // Busca os modelos uma única vez, quando a página aparece (dependências vazias: [])
  useEffect(() => {
    async function buscarModelos() {
      setCarregando(true)
      try {
        const resposta = await fetch(URL_MODELOS)
        const dados: Modelo[] = await resposta.json()
        setModelos(dados)
      } finally {
        // Terminou a requisição: esconde o "carregando"
        setCarregando(false)
      }
    }

    buscarModelos()
  }, [])

  function alternarFavorito(id: number) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favoritoId) => favoritoId !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  const modelosFiltrados =
    filtroMaterial === 'Todos'
      ? modelos
      : modelos.filter((modelo) => modelo.material === filtroMaterial)

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
          materiais={materiais}
          filtroAtivo={filtroMaterial}
          onFiltrar={setFiltroMaterial}
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
