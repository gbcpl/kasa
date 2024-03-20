import { Link } from "react-router-dom"

function Error() {
  return (
    <div>
    <div className="error">
      <h1>404</h1>
      <p>Oups, la page que vous demandez n'existe pas.</p>
      <Link to="/"><p className="home" style={{textDecoration: "underline"}}>Retour sur la page d'accueil</p></Link>
    </div>
    </div>
)}

export default Error;
