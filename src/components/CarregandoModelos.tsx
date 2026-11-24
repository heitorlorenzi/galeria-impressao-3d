// Desafio bonificado "Esqueleto de carregamento":
// enquanto o JSON não chega, mostra cards "fantasma" animados no lugar da grade
const cardsFantasma = [1, 2, 3, 4, 5, 6]

function CarregandoModelos() {
  return (
    <div className="estado-carregando" role="status">
      <p className="estado-carregando-texto">Carregando modelos...</p>

      <div className="modelos-grid">
        {cardsFantasma.map((numero) => (
          <div key={numero} className="modelo-card esqueleto" aria-hidden="true">
            <div className="esqueleto-imagem"></div>
            <div className="esqueleto-linha titulo"></div>
            <div className="esqueleto-linha"></div>
            <div className="esqueleto-linha curta"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarregandoModelos
