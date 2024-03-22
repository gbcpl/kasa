import { useState } from "react";
import arrow_up from '../img/arrow_up.png';

function Collapse({ className, title, description}) {
  
  const [openStates, setOpenStates] = useState(false);

  function openCollapse() {
    let updatedStates = openStates;
    updatedStates = !updatedStates; // remplace le false de l'index par un true et inversement 
    setOpenStates(updatedStates); // applique le nouvel état dans setOpenStates
  }

  return (
    <div className="button-container">
      <button className={`${className}`}>
        <p>{title}</p>
        <img className={`arrow ${openStates ? "open" : ""}`}  src={arrow_up} alt="arrow-back" onClick={openCollapse} />      
      </button>
      {openStates && <p className="paragraphCollapse">{description}</p>}
    </div>
  )
}

export default Collapse