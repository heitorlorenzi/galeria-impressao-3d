// Mostrado no lugar da grade enquanto o JSON dos modelos ainda não chegou
function CarregandoModelos() {
  return (
    <div className="estado-carregando" role="status">
      <span className="spinner" aria-hidden="true"></span>
      <p>Carregando modelos...</p>
    </div>
  )
}

export default CarregandoModelos
