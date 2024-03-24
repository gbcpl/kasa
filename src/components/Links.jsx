import { NavLink } from "react-router-dom"

function Links({to, className, title}) {
  return (
    <NavLink to={to} className={className} activeClassName="active">{title}</NavLink>
  )
}

export default Links