type CampoBuscaProps = {
  busca: string
  onBuscar: (texto: string) => void
}

// Desafio bonificado "Busca": campo controlado.
// O valor do input vem do estado (busca) e cada tecla atualiza esse estado (onBuscar),
// então a lista é filtrada em tempo real enquanto o usuário digita.
function CampoBusca({ busca, onBuscar }: CampoBuscaProps) {
  return (
    <label className="campo-busca">
      <span className="sr-only">Buscar modelo pelo nome</span>
      <input
        type="search"
        placeholder="Buscar modelo pelo nome..."
        value={busca}
        onChange={(evento) => onBuscar(evento.target.value)}
      />
    </label>
  )
}

export default CampoBusca
