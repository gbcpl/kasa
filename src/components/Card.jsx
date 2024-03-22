function Card({ flat }) {
  return (
    <article className="displayFlats">
      <div className="oneflat" key={flat.title}>{flat.title}</div>
      <img className="cover" key={flat.cover} src={flat.cover} alt='cover'></img>
    </article>
  )}

export default Card