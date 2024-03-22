import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse.jsx";
import source2 from '../../img/source2.png'


function About() {
  return (
    <div>
      <Banner img={source2} title=""/>
      <Collapse title="Fiabilité" className="button-collapse" description = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"></Collapse> 
      <Collapse title="Respect"  className="button-collapse" description = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"> </Collapse> 
      <Collapse title="Survie"  className="button-collapse" description = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"> </Collapse> 
      <Collapse title="Sécurité" className="button-collapse" description = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"></Collapse> 
    </div>
  )
}

export default About;

// appeler les 4 collapse 