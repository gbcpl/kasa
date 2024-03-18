import { Link } from "react-router-dom"
import image from '../img/logo.png'

function Header() {

  return (
    <nav className="header">
      <div className="header-layout">
        <img src={image} alt="logo"/>
        <div className="links">
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
        </div>    
      </div>
    </nav>
  )
}

export default Header