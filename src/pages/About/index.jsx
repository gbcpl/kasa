import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse.jsx";
import source2 from '../../img/source2.png'


function About() {
  return (
    <div className="about-container">
      <Banner img={source2} title=""/>
      <Collapse title="Fiabilité" className="button-collapse" description = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes" nameOfClass="paragraphCollapse"></Collapse> 
      <Collapse title="Respect"  className="button-collapse" description = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes" nameOfClass="paragraphCollapse"> </Collapse> 
      <Collapse title="Service"  className="button-collapse" description = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes" nameOfClass="paragraphCollapse"> </Collapse> 
      <Collapse title="Sécurité" className="button-collapse" description = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes" nameOfClass="paragraphCollapse"></Collapse> 
    </div>
  )
}

export default About;