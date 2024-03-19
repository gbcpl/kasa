import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import Error from '../pages/Error'
import About from '../pages/About'
import Logement from '../pages/Logement'
import Footer from '../components/Footer'


function Router() {
  return (
  <BrowserRouter>
    <div className="">
      <Header />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/logement" element={<Logement />} />
      </Routes>
      <Footer />
    </div>  
    </BrowserRouter>
  )
}

export default Router