import { useState } from "react";
import arrow_up from '../img/arrow_up.png';

function Collapse() {
  
  const [openStates, setOpenStates] = useState([false, false, false, false]);

  function openCollapse(index) {
    const updatedStates = [...openStates];
    updatedStates[index] = !updatedStates[index]; // remplace le false de l'index par un true et inversement 
    setOpenStates(updatedStates); // applique le nouvel état dans setOpenStates
  }

  function arrowsTransform(index) {
    return (
      <img
        className={openStates[index] ? "rotatearrow2" : "rotatearrow"}        
        src={arrow_up}
        alt="arrow-back"
        onClick={() => openCollapse(index)}
      />
    );
  }

  return (
    <div className="button-container">
        <button className="button-collapse" >
            <p>Fiabilité</p>
            {arrowsTransform(0)}        
        </button>
        {openStates[0] && (<p className="paragraphCollapse">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p>)}
        <button className="button-collapse">
          <p>Respect</p>
          {arrowsTransform(1)}          
        </button>
          {openStates[1] && (<p className="paragraphCollapse">Something</p>)}
        <button className="button-collapse">
          <p>Service</p>
            {arrowsTransform(2)}          
        </button> 
          {openStates[2] && (<p className="paragraphCollapse">Something</p>)}
        <button className="button-collapse">
          <p>Sécurité</p>
          {arrowsTransform(3)}          
        </button>
          {openStates[3] && (<p className="paragraphCollapse">Something</p>)}
    </div>
  )
}

export default Collapse