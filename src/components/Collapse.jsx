import { useState } from "react";
import arrow_up from '../img/arrow_up.png';

function Collapse({ className, title, description, nameOfClass}) {
  
  const [openStates, setOpenStates] = useState(false);

  function openCollapse() {
    setOpenStates(!openStates);
  }

  return (
    <div className="button-container">
      <button className={`${className}`}>
        <p>{title}</p>
        <img className={`arrow ${openStates ? "open" : ""}`}  src={arrow_up} alt="arrow-back" onClick={openCollapse} />      
      </button>
      {openStates && <p className={nameOfClass}>{description}</p>}
    </div>
  )
}

export default Collapse