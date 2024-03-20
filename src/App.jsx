

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './components/Home'; 
import Results from './components/results';
import Itinerary from './components/itinerary';
import About from "./components/about";
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
