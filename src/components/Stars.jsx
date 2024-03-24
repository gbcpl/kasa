import flats from '../datas/logements.json';
import { useParams } from 'react-router-dom';


function Stars() {
  const { id } = useParams()

  const idLogement = flats.find(flat => flat.id === id);
  const stars = idLogement.rating;

  return (
    <div className="tags">
      {stars}
    </div>
  )
}

export default Stars;