import flats from '../datas/logements.json';

function Flats() {

  const listFlats = JSON.stringify(flats, null, 1);
  const flatsList = JSON.parse(listFlats)

  const flatIds = flatsList.map(flat => <div className="oneflat" key={flat.title}>{flat.title}</div>);


  return (
    <div className="list-of-flats">
      <section className="displayFlats">{flatIds}</section>
    </div>
    )
}

export default Flats