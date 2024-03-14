import { Link } from "react-router-dom"

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/profiles">Profils</Link>
      <Link to="/test">Faire le test</Link>
    </nav>
  )
}

export default Header