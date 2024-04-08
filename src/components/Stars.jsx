import star from '../img/stars.png';
import starsRed from '../img/stars-red.png'
import { useState, useEffect } from 'react';

function Stars( { rating }) {
  const [redStars, setRedStars] = useState([]);
  const [blankStars, setBlankStars] = useState([]);

  useEffect(() => {

    const redStarsArray = [];
    for (let i = 0; i < rating; i++) {
      redStarsArray.push(<img src={starsRed} alt="red stars" key={i} />);
    }
    setRedStars(redStarsArray);

    const noStar = 5 - rating;
    const blankStarArray = [];
    for (let i = 0; i < noStar; i++) {
      blankStarArray.push(<img src={star} alt="blank star" key={i} />);
    }
    setBlankStars(blankStarArray);
  }, [rating]);

  return (
    <div className="stars">
      {redStars}
      {blankStars}
    </div>
  )
}

export default Stars;