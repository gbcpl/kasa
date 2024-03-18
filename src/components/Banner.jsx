import banner from '../img/source1.png'

function Banner() {
  return (
    <div className="banner-container">
    <div className="banner-layout">
      <div className="banner">
        <img src={banner} alt="banniere"/>
      </div>
    </div>
    <h1>Chez vous, partout et ailleurs</h1>

    </div>
  )
}

export default Banner;
