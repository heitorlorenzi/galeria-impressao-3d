import type { Modelo } from '../data/modelos'

type ModeloCardProps = {
  modelo: Modelo
  favorito: boolean
  onFavoritar: (id: number) => void
}

function ModeloCard({ modelo, favorito, onFavoritar }: ModeloCardProps) {
  return (
    <article className={favorito ? 'modelo-card favorito' : 'modelo-card'}>
      <div className="modelo-imagem">
        <img src={modelo.imagem} alt={modelo.nome} />
        <button
          className="botao-favorito"
          aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          aria-pressed={favorito}
          onClick={() => onFavoritar(modelo.id)}
        >
          {favorito ? '♥' : '♡'}
        </button>
      </div>
      <h3>{modelo.nome}</h3>
      <p className="descricao">{modelo.descricao}</p>
      <p className="material">Material recomendado: {modelo.material}</p>
      <p className="dificuldade">Dificuldade: {modelo.dificuldade}</p>
      <p className="tempo">Tempo estimado: {modelo.tempo}</p>
    </article>
  )
}

export default ModeloCard
