import type { Filamento } from '../data/filamentos'
import FilamentoCard from './FilamentoCard'

type SecaoFilamentosProps = {
  filamentos: Filamento[]
}

function SecaoFilamentos({ filamentos }: SecaoFilamentosProps) {
  return (
    <section className="filamentos" id="filamentos">
      <h2>Tipos de Filamentos</h2>
      <div className="filamentos-lista">
        {filamentos.map((filamento) => (
          <FilamentoCard key={filamento.id} filamento={filamento} />
        ))}
      </div>
    </section>
  )
}

export default SecaoFilamentos
