type MensagemErroProps = {
  mensagem: string
  onTentarNovamente: () => void
}

// Mostrado no lugar da grade quando o fetch dos modelos falha
function MensagemErro({ mensagem, onTentarNovamente }: MensagemErroProps) {
  return (
    <div className="estado-erro" role="alert">
      <p className="estado-erro-icone" aria-hidden="true">⚠</p>
      <h3>Ops! Os modelos não carregaram.</h3>
      <p>{mensagem}</p>
      <button className="botao-tentar" onClick={onTentarNovamente}>
        Tentar novamente
      </button>
    </div>
  )
}

export default MensagemErro
