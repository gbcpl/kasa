import { Link } from "react-router-dom"

function Card({ flat }) {
  return (
    <Link to={`/logement/${flat.id}`} title={flat.title}>
    <article className="displayFlats">
      <div className="gradient"></div>
      <div className="oneflat" key={flat.title}>{flat.title}</div>
      <img className="cover" key={flat.cover} src={flat.cover} alt='cover'></img>
    </article>
    </Link>
  )}

export default Card