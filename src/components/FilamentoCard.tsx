import type { Filamento } from '../data/filamentos'

type FilamentoCardProps = {
  filamento: Filamento
}

function FilamentoCard({ filamento }: FilamentoCardProps) {
  return (
    <article className="filamento-item">
      <h3>{filamento.nome}</h3>
      <p>{filamento.descricao}</p>
      <p>Temperatura de impressão: {filamento.temperatura}</p>
    </article>
  )
}

export default FilamentoCard
