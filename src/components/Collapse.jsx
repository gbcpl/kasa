import { useState } from "react";
import arrow_up from '../img/arrow_up.png';

function Collapse() {
  
  const [openStates, setOpenStates] = useState([false, false, false, false]);

  function openCollapse(index) {
    const updatedStates = [...openStates];
    updatedStates[index] = !updatedStates[index];
    setOpenStates(updatedStates);
  }

  return (
    <div className="button-container">
        <button className="button-collapse" >
          <p>Fiabilité</p>
          {openStates[0] ? <img className={openStates[0] ? "rotatearrow2" : ""} src={arrow_up} alt="arrow-back" onClick={() => openCollapse(0)}></img> : <img className={!openStates[0] ? "rotatearrow" : ""} src={arrow_up} alt="arrow-back" onClick={() => openCollapse(0)}></img>}
        </button>
        {openStates[0] && (<p className="paragraphCollapse">Something</p>)}
        <button className="button-collapse">
          <p>Respect</p>
          {openStates[1] ? <img className={openStates[1] ? "rotatearrow2" : ""} src={arrow_up} alt="arrow-back" onClick={() => openCollapse(1)}></img> : <img className={!openStates[1] ? "rotatearrow" : ""} src={arrow_up} alt="arrow-back" onClick={() => openCollapse(1)}></img>}
        </button>
          {openStates[1] && (<p className="paragraphCollapse">Something</p>)}
        <button className="button-collapse">
          <p>Service</p>
          {openStates[2] ? <img className={openStates[2] ? "rotatearrow2" : ""} src={arrow_up} alt="arrow-back" onClick={() => openCollapse(2)}></img> : <img className={!openStates[2] ? "rotatearrow" : ""} src={arrow_up} alt="arrow-back" onClick={() => openCollapse(2)}></img>}
        </button> 
          {openStates[2] && (<p className="paragraphCollapse">Something</p>)}
        <button className="button-collapse">
          <p>Sécurité</p>
          {openStates[3] ? <img className={openStates[3] ? "rotatearrow2" : ""} src={arrow_up} alt="arrow-back" onClick={() => openCollapse(3)}></img> : <img className={!openStates[3] ? "rotatearrow" : ""} src={arrow_up} alt="arrow-back" onClick={() => openCollapse(3)}></img>}
        </button>
          {openStates[3] && (<p className="paragraphCollapse">Something</p>)}
    </div>
  )
}

export default Collapse