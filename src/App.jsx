

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import UserInputForm from './components/UserInputForm';
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
          <Route path="/" element={<UserInputForm />} />
          <Route path="/results" element={<Results />} />
          <Route path="/itinerary" element={<Itinerary />} /> {/* Now correctly refers to the lowercase filename */}
          <Route path="/about" Component={About} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
