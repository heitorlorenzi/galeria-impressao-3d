type HeaderProps = {
  menuAberto: boolean
  onAlternarMenu: () => void
  onFecharMenu: () => void
}

function Header({ menuAberto, onAlternarMenu, onFecharMenu }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo">PrintHub 3D</div>

      <button
        className="menu-toggle"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuAberto}
        onClick={onAlternarMenu}
      >
        {menuAberto ? '✕' : '☰'}
      </button>

      <nav className={menuAberto ? 'nav nav-aberta' : 'nav'}>
        <a href="#inicio" onClick={onFecharMenu}>Início</a>
        <a href="#modelos" onClick={onFecharMenu}>Modelos</a>
        <a href="#filamentos" onClick={onFecharMenu}>Filamentos</a>
        <a href="#sobre" onClick={onFecharMenu}>Sobre</a>
      </nav>
    </header>
  )
}

export default Header
