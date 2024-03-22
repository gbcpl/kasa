import { NavLink } from "react-router-dom"

function Links() {
  return (
  <div className="textdecoration">
    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>A propos</NavLink>
  </div>
)
}

export default Links