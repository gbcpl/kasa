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
    <div className="main-container">
      <Header />    
      <Routes>
        <Route path="/kasa" element={<Home />} />
        <Route path="/kasa/about" element={<About />} />
        <Route path="/kasa/*" element={<Error />} />
        <Route path="/kasa/logement/:id" element={<Logement />}/>
      </Routes>
      <Footer />
    </div>  
    </BrowserRouter>
  )
}

export default Router