import image from '../img/logo.png'
import Links from './Links'
// utiliser navlink + faire classe active

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

