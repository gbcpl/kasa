import flats from '../datas/logements.json';

function Card() {

  const listFlats = JSON.stringify(flats, null, 1);
  const flatsList = JSON.parse(listFlats)
  
  const flatCards = flatsList.map(flat => (
    <section className="displayFlats">
      <div className="oneflat" key={flat.title}>{flat.title}</div>
      <img className="cover" key={flat.cover} src={flat.cover} alt='cover'></img>
    </section>
  ))

  return (
    <div className="list-of-flats">
      {flatCards}
    </div>
    )
}

export default Card