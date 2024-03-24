import { Link } from "react-router-dom"
import OneLogement from "./OneLogement"

function Card({ flat }) {
  return (
    <Link to={`/logement/${flat.id}`} title="Clique moi">
    <article className="displayFlats">
      <div className="oneflat" key={flat.title}>{flat.title}</div>
      <img className="cover" key={flat.cover} src={flat.cover} alt='cover'></img>
    </article>
    </Link>
  )}

export default Card