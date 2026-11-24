import type { Modelo } from '../data/modelos'
import CarregandoModelos from './CarregandoModelos'
import FiltroMaterial from './FiltroMaterial'
import ModeloCard from './ModeloCard'

type SecaoModelosProps = {
  modelos: Modelo[]
  carregando: boolean
  materiais: string[]
  filtroAtivo: string
  onFiltrar: (material: string) => void
  favoritos: number[]
  onFavoritar: (id: number) => void
}

function SecaoModelos({
  modelos,
  carregando,
  materiais,
  filtroAtivo,
  onFiltrar,
  favoritos,
  onFavoritar,
}: SecaoModelosProps) {
  return (
    <section className="modelos" id="modelos">
      <h2>Modelos Populares</h2>

      <div className="modelos-barra">
        <FiltroMaterial materiais={materiais} filtroAtivo={filtroAtivo} onFiltrar={onFiltrar} />
        <p className="contador-favoritos">♥ {favoritos.length} favorito(s)</p>
      </div>

      {/* Enquanto os dados não chegam, mostra o carregando no lugar da grade */}
      {carregando && <CarregandoModelos />}

      {!carregando && (
        <div className="modelos-grid">
          {modelos.map((modelo) => (
            <ModeloCard
              key={modelo.id}
              modelo={modelo}
              favorito={favoritos.includes(modelo.id)}
              onFavoritar={onFavoritar}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default SecaoModelos
