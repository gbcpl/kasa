import footerlogo from '../img/footerlogo.png'


function Footer() {
  const logofooter = footerlogo;
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img src={logofooter} alt="banniere"/>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer