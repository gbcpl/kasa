import { useState } from "react";
import arrow_up from '../img/arrow_up.png';

function Collapse({ className, title, description, nameOfClass}) {
  
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
              description.map(element => <p>{element}</p>)
            ) : (
              <p>{description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Collapse