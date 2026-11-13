import type { Modelo } from '../data/modelos'
import FiltroMaterial from './FiltroMaterial'
import ModeloCard from './ModeloCard'

type SecaoModelosProps = {
  modelos: Modelo[]
  materiais: string[]
  filtroAtivo: string
  onFiltrar: (material: string) => void
  favoritos: number[]
  onFavoritar: (id: number) => void
}

function SecaoModelos({
  modelos,
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
    </section>
  )
}

export default SecaoModelos
