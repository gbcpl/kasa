import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import Test from './pages/Test';
import Competences from './pages/Competences';
import Profiles from './pages/Profiles';
import Error from './pages/Error';
import NoCompetences from './pages/Nocompetences';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/*" element={<Error />} />
        <Route path="/nocompetences" element={<NoCompetences />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
