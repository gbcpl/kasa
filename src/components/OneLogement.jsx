import flats from '../datas/logements.json';
import { Navigate  } from 'react-router-dom';
import Slideshow from './Slideshow';
import Tags from './Tags'
import Stars from './Stars'
import Collapse from './Collapse';

function OneLogement({ id }) {
  const logementData = flats.find(flat => flat.id === id);

  if (!logementData) {
    return <Navigate to="/erreur" />  
  }

  const pictures = logementData.pictures;

  return (
    <div className="info-container">
      <Slideshow pictures={pictures}/>
      <div className="logement">
        <div className="logement-container">
          <div className="logement-description">
            <h1>{logementData.title}</h1>
            <h2>{logementData.location}</h2>
            <Tags tags={logementData.tags} id={id}/>
          </div>
        </div>
        <div className="host-and-stars">
          <div className="logement-host">
            <p>{logementData.host.name}</p>
            <img src={logementData.host.picture } alt={logementData.title} />
          </div>
          <Stars rating={logementData.rating} />
        </div>
      </div>
      <div className="logement-collapse">
        <Collapse title="Description" className="more-collapse" description = {logementData.description} nameOfClass="description"/>
        <Collapse title="Équipements" className="more-collapse" description = {logementData.equipments} nameOfClass="description"/>
       </div>
    </div>
  );
}

export default OneLogement;