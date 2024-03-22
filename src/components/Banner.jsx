function Banner({ img, title }) {

  return (
    <div className="banner-container">
      <div className="banner-layout">
        <div className="banner">
          <img src={img} alt="Bannière"></img>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Banner;