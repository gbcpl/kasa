import flats from '../datas/logements.json';
import { Navigate  } from 'react-router-dom';
import Slideshow from './Slideshow';
import Tags from './Tags'
import Stars from './Stars'
import Collapse from './Collapse';

function OneLogement({ id }) {
  const idLogement = flats.find(flat => flat.id === id);

  if (!idLogement) {
    return <Navigate to="/erreur" />  
  }

  return (
    <div className="logement">
      <Slideshow />
      <div className="logement-container">
        <div className="logement-description">
          <h1>{idLogement.title}</h1>
          <h2>{idLogement.location}</h2>
        </div>
        <div className="logement-host">
          <p>{idLogement.host.name}</p>
          <img src={idLogement.host.picture } alt={idLogement.title} />
        </div>
      </div>
      <div className="tags-and-stars">
        <Tags />
        <Stars />
      </div>
      <div className="logement-collapse">
        <Collapse title="Description" className="more-collapse" description = {idLogement.description} nameOfClass="description"/>
        <Collapse title="Équipements" className="more-collapse" description = {idLogement.equipments} nameOfClass="equipements"/>
      </div>
    </div>
  );
}

export default OneLogement;