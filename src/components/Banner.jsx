import source1 from '../img/source1.png'
import source2 from '../img/source2.png'
import { useLocation  } from "react-router-dom";

function Banner() {

  const location = useLocation();

  function sourceimg() {
    if (location.pathname === '/') {        
      return <img src={source1} alt="banniere"/>
    } else if (location.pathname === '/about') {
      return <img src={source2} alt="banniere"/>
    }
  }

  function title() {
    if (location.pathname === '/') {        
      return <h1>Chez vous, partout et ailleurs</h1>
    } 
  }
  return (
    <div className="banner-container">
      <div className="banner-layout">
        <div className="banner">
          {sourceimg()}
          {title()}
        </div>
      </div>
    </div>
  )
}

export default Banner;
