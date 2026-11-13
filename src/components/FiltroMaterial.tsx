type FiltroMaterialProps = {
  materiais: string[]
  filtroAtivo: string
  onFiltrar: (material: string) => void
}

function FiltroMaterial({ materiais, filtroAtivo, onFiltrar }: FiltroMaterialProps) {
  return (
    <div className="filtros">
      {materiais.map((material) => (
        <button
          key={material}
          className={material === filtroAtivo ? 'filtro-botao ativo' : 'filtro-botao'}
          onClick={() => onFiltrar(material)}
        >
          {material}
        </button>
      ))}
    </div>
  )
}

export default FiltroMaterial
