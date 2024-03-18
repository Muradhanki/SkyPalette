import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Itinerary = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Added navigate hook
  const { destination } = location.state || {};
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (destination?.name) {
      const PIXABAY_API_KEY = '42934319-68bf0be7d32d5ca42dc600577';
      const query = encodeURIComponent(destination.name);
      const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&pretty=true&category=travel`;

      axios.get(url)
        .then(response => {

            console.log('API Response:', response); // Log the API response

          const hits = response.data.hits;
          if (hits.length > 0) {
            setImageUrl(hits[0].webformatURL);

            console.log('Image URL:', hits[0].webformatURL); // Log the selected image URL

          } else {
            setImageUrl('/path/to/default/image.jpg');

            console.log('Default Image URL used'); // Indicate that the default image URL is used
        }

          
        })
        .catch(error => console.error('Error fetching image:', error));
    }
  }, [destination?.name]);

  // Navigate back one step
  const goBack = () => {
    navigate(-1);
  };

  // Navigate directly to the input form
  const goToInputForm = () => {
    navigate('/');
  };

  if (!destination) {
    return <div className="text-center">No destination selected.</div>;
  }

  return (
    <div className="itinerary-container d-flex flex-column align-items-center justify-content-center mt-5">

        <h2 className="title-color">Itinerary for Your Trip</h2>
        <img src={imageUrl} alt="Destination" className="img-fluid my-4" />
        <p>Details about your trip to {destination.name} will go here.</p>
        
        {/* Additional Details Sections */}
        <div className="mb-4">
          <h3 className="section-title">Leisure</h3>
          <p>Leisure activities and options in {destination.name}.</p>
        </div>

        <div className="mb-4">
          <h3 className="section-title">Landmarks</h3>
          <p>Famous landmarks to visit in {destination.name}.</p>
        </div>

        <div className="mb-4">
          <h3 className="section-title">To See</h3>
          <p>Must-see places in {destination.name}.</p>
        </div>
         {/* Buttons */}
         <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button className="btn btn-custom mx-2" onClick={goBack}>Go Back</button>
          <button className="btn btn-custom" onClick={goToInputForm}>Back to Input Form</button>
        </div>

      </div>
 
  );
};

export default Itinerary;
