import { useState } from 'react';
import previousimg from '../img/arrow_previous.png'
import nextimg from '../img/arrow_forward.png'

function Slideshow( { pictures }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  function next() {
    const nextIndex = (currentIndex + 1) % pictures.length;
    setCurrentIndex(nextIndex)
  }

  function previous() {
    const previousIndex = (currentIndex - 1 + pictures.length) % pictures.length;
    setCurrentIndex(previousIndex)
  }
  
  return (
    <div className="caroussel">
      {pictures.length > 1 ?
      <div className="caroussel-container">
        <img className="previous" src={previousimg} alt="previous" onClick={previous}/>
        <img className="caroussel-img" src={pictures[currentIndex]} alt="caroussel"></img>
        <img className="next" src={nextimg} alt="next" onClick={next}/>
        <p className="numbers">{currentIndex+1}/{pictures.length}</p>
      </div> : 
      <div className="caroussel-container">
        <img className="caroussel-img" src={pictures[currentIndex]} alt="caroussel"></img>
      </div>}
    </div>
  )
}

export default Slideshow