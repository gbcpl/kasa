import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import source1 from '../../img/source1.png'

function Home() {
  return (
    <div className="cards-container">
      <Banner img={source1} title="Chez vous, partout et ailleurs" className="backgroundimg"/>
      <Cards />
    </div>

  )
}

export default Home;