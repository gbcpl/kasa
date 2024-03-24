import flats from '../datas/logements.json';
import { useParams } from 'react-router-dom';


function Tags() {
  const { id } = useParams()

  const idLogement = flats.find(flat => flat.id === id);
  const listOfTags = idLogement.tags;

  return (
    <div className="tags">
      {listOfTags.map(tag => (
        <p>
          {tag}
        </p>
      )
    )}
    </div>
  )
}

export default Tags;