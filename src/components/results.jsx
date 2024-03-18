
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { destinations } = location.state || { destinations: [] };

   // Function to handle navigation to Itinerary component
   const createItinerary = (destination) => {
    navigate('/itinerary', { state: { destination } });
  };


  if (!destinations.length) {
    return <div className="text-center">No destinations found based on your criteria.</div>;
  }

  const handleBackToForm = () => navigate('/');

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      
      <div className="results-container">
        
        <h2 className="title-color my-4">Your Ideal Destination</h2>
        {destinations.slice(0, 1).map((destination, index) => (
          destination.properties.name && (
            
            <div key={index} className="text-center mb-4 w-100">
              
              <h3 className="destination-name-color">{destination.properties.name}</h3>
              {destination.properties.description && <p>{destination.properties.description}</p>}
             
              <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-custom mx-2" onClick={() => createItinerary(destination)}>Create Itinerary</button>
                <button className="btn btn-custom" onClick={handleBackToForm}>Back to Form</button>
              </div>
            </div>
          )
        ))}
        {destinations.length > 1 && (
          <>
            <h3 className="secondary-title-color mt-5">You May Also Like This</h3>
            {destinations.slice(1, 2).map((destination, index) => (
              destination.properties.name && (
                <div key={index} className="text-center mb-4 w-100">
                  <h3 className="destination-name-color">{destination.properties.name}</h3>
                  <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-custom mx-2" onClick={() => createItinerary(destination)}>Create Itinerary</button>
                    <button className="btn btn-custom" onClick={handleBackToForm}>Back to Form</button>
                  </div>
                </div>
              )
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Results;