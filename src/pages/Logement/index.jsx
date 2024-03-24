import OneLogement from "../../components/OneLogement";
import { useParams } from 'react-router-dom';

function Logement() {
  const { id } = useParams();

  return (
    <div>
      <OneLogement id={id} />
    </div>
  );
}

export default Logement;