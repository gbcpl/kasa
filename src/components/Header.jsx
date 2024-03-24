import image from '../img/logo.png'
import Links from './Links'

function Header() {

  return (
    <nav className="header">
      <div className="header-layout">
        <img src={image} alt="logo"/>
        <div className="links">
          <Links to="/" className={({ isActive }) => isActive ? "active" : ""} title="Accueil"/>
          <Links to="/about" className={({ isActive }) => isActive ? "active" : ""} title="A propos"/>
        </div>    
      </div>
    </nav>
  )
}

export default Header

