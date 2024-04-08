import { NavLink } from "react-router-dom"

function Links({to, className, title}) {
  return (
    <NavLink to={to} className={className}>{title}</NavLink>
  )
}

export default Links