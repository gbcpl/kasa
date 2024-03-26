import flats from '../datas/logements.json';
import { useParams } from 'react-router-dom';
import star from '../img/stars.png';
import starsRed from '../img/stars-red.png'

function Stars() {
  const { id } = useParams()

  const idLogement = flats.find(flat => flat.id === id);
  const numberOfStars = idLogement.rating;

  const redStars = []
  for (let i = 0; i < numberOfStars; i++) {
    redStars.push(<img src={starsRed} alt="red stars"/>)
  }

  const noStar = 5 - numberOfStars;

  const blankStar = []
  for (let i = 0; i < noStar; i++) {
    blankStar.push(<img src={star} alt ="no star"/>)
  }

  return (
    <div className="stars">
      {redStars}
      {blankStar}
    </div>
  )
}

export default Stars;