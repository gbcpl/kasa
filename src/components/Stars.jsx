import star from '../img/stars.png';
import starsRed from '../img/stars-red.png'
import { useState, useEffect } from 'react';

function Stars( { idLogement }) {
  const [redStars, setRedStars] = useState([]);
  const [blankStars, setBlankStars] = useState([]);

  useEffect(() => {
    const numberOfStars = idLogement.rating;

    const redStarsArray = [];
    for (let i = 0; i < numberOfStars; i++) {
      redStarsArray.push(<img src={starsRed} alt="red stars" key={i} />);
    }
    setRedStars(redStarsArray);

    const noStar = 5 - numberOfStars;
    const blankStarArray = [];
    for (let i = 0; i < noStar; i++) {
      blankStarArray.push(<img src={star} alt="blank star" key={i} />);
    }
    setBlankStars(blankStarArray);
  }, [idLogement.rating]);

  return (
    <div className="stars">
      {redStars}
      {blankStars}
    </div>
  )
}

export default Stars;