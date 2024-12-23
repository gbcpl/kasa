import Links from './Links'

function Header() {

  return (
    <nav className="header">
      <div className="header-layout">
        <div className="backgroundimg"></div>
        <div className="links">
          <Links to="/kasa" className={({ isActive }) => isActive ? "active" : ""} title="Accueil"/>
          <Links to="/kasa/about" className={({ isActive }) => isActive ? "active" : ""} title="A propos"/>
        </div>    
      </div>
    </nav>
  )
}

export default Header

