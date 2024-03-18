

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import UserInputForm from './components/UserInputForm';
import Results from './components/results';
import Itinerary from './components/itinerary';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<UserInputForm />} />
          <Route path="/results" element={<Results />} />
          <Route path="/itinerary" element={<Itinerary />} /> {/* Now correctly refers to the lowercase filename */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
