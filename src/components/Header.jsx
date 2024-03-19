import { Link } from "react-router-dom"
import image from '../img/logo.png'
import { useLocation  } from "react-router-dom";


function Links() {
  const location = useLocation();

  if (location.pathname === '/') {        
    return (
    <div className="textdecoration">
      <Link to="/"><p style={{textDecoration: "underline"}}>Accueil</p></Link> 
      <Link to="/about"><p style={{textDecoration: "none"}}>A propos</p></Link>
    </div>
    ) 

  } else if (location.pathname === '/about') {
    return (
      <div className="textdecoration">
        <Link to="/"><p style={{textDecoration: "none"}}>Accueil</p></Link> 
        <Link to="/about"><p style={{textDecoration: "underline"}}>A propos</p></Link>
      </div>
    ) 
  }
}

function Header() {

  return (
    <nav className="header">
      <div className="header-layout">
        <img src={image} alt="logo"/>
        <div className="links">
          <Links />
        </div>    
      </div>
    </nav>
  )
}

export default Header

