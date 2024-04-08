import { useState } from "react";
import arrow_up from '../img/arrow_up.png';

function Collapse({ className, title, description, nameOfClass, logementData}) {
  
  const [openStates, setOpenStates] = useState(false);

  function openCollapse() {
    setOpenStates(!openStates);
  }

  return (
    <div className="button-container">
      <button className={className} onClick={openCollapse}>
        <p>{title}</p>
        <img className={`arrow ${openStates ? "open" : ""}`} src={arrow_up} alt="arrow-back" />      
      </button>
      {openStates && (
        <div className={nameOfClass}>
          <div>
            {Array.isArray(description) ? (
              description.map((element, index) => <p key={index}>{element}</p>)
            ) : (
              <p key={0}>{description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Collapse