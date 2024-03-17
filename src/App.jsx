// import React from "react"
// import Navbar from "./components/Navbar"
// import Body from './components/Body'
// import Footer from './components/Footer'


// function App() {


//   return (

//     <div className="container">
//       <Navbar />
//       <Body />
//       <Footer />

//     </div>

//   )
// }

// export default App

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Define function to make API request
    function getTravelRecommendations(travelDate, preferences) {
      // Assuming you have already calculated the time of year
      const timeOfYear = calculateTimeOfYear(travelDate);

      // Construct the URL with necessary parameters
      const url = `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=-180&lon_max=180&lat_min=-90&lat_max=90&k=tourism&format=json&limit=10&rates=count&q=country&rate=population&charset=utf-8&apikey=5ae2e3f221c38a28845f05b661d3ece26b41eb189412377beb175d5c&time_of_year=${timeOfYear}`;

      // Make the HTTP GET request
      fetch(url)
        .then(response => response.json())
        .then(recommendations => {
          console.log('Travel recommendations:', recommendations);
          // Process recommendations or pass them to another function
        })
        .catch(error => {
          console.error('Error fetching travel recommendations:', error);
        });
    }

    // Function to calculate the time of year based on travel date
    function calculateTimeOfYear(travelDate) {
      // You can implement your logic here to determine the time of year
      // For example, you can use the month of the travelDate to categorize it into seasons
      // This is a simplified example, you may need to adjust it based on your requirements
      const month = travelDate.getMonth();
      if (month >= 3 && month <= 5) {
        return 'spring';
      } else if (month >= 6 && month <= 8) {
        return 'summer';
      } else if (month >= 9 && month <= 11) {
        return 'autumn';
      } else {
        return 'winter';
      }
    }

    // Example usage
    const travelDate = new Date('2024-06-15'); // Example travel date
    const preferences = {
      climate: 'warm',
      activities: ['beach', 'hiking']
    };

    // Call the function to get travel recommendations
    getTravelRecommendations(travelDate, preferences);
  }, []); // Empty dependency array ensures that the effect runs only once after the component mounts

  return (
    <div className="container">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
