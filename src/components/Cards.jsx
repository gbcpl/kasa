import flats from '../datas/logements.json';
import Card from './Card';

function Cards() {

  return (
    <section className="list-of-flats">
      {flats.map(flat => (
        <Card key={flat.title} flat={flat} /> 
      ))}
    </section>
    )
}

export default Cards