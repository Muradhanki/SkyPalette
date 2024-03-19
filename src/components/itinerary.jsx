// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Itinerary = () => {
//   const location = useLocation();
//   const navigate = useNavigate(); // Added navigate hook
//   const { destination } = location.state || {};
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     if (destination?.name) {
//       const PIXABAY_API_KEY = '42934319-68bf0be7d32d5ca42dc600577';
//       const query = encodeURIComponent(destination.name);
//       const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&pretty=true&category=travel`;

//       axios.get(url)
//         .then(response => {

//             console.log('API Response:', response); // Log the API response

//           const hits = response.data.hits;
//           if (hits.length > 0) {
//             setImageUrl(hits[0].webformatURL);

//             console.log('Image URL:', hits[0].webformatURL); // Log the selected image URL

//           } else {
//             setImageUrl('/path/to/default/image.jpg');

//             console.log('Default Image URL used'); // Indicate that the default image URL is used
//         }

          
//         })
//         .catch(error => console.error('Error fetching image:', error));
//     }
//   }, [destination?.name]);

//   // Navigate back one step
//   const goBack = () => {
//     navigate(-1);
//   };

//   // Navigate directly to the input form
//   const goToInputForm = () => {
//     navigate('/');
//   };

//   if (!destination) {
//     return <div className="text-center">No destination selected.</div>;
//   }

//   return (
//     <div className="itinerary-container d-flex flex-column align-items-center justify-content-center mt-5">

//         <h2 className="title-color">Itinerary for Your Trip</h2>
//         <img src={imageUrl} alt="Destination" className="img-fluid my-4" />
//         <p>Details about your trip to {destination.name} will go here.</p>
        
//         {/* Additional Details Sections */}
//         <div className="mb-4">
//           <h3 className="section-title">Leisure</h3>
//           <p>Leisure activities and options in {destination.name}.</p>
//         </div>git pull 

//         <div className="mb-4">
//           <h3 className="section-title">Landmarks</h3>
//           <p>Famous landmarks to visit in {destination.name}.</p>
//         </div>

//         <div className="mb-4">
//           <h3 className="section-title">To See</h3>
//           <p>Must-see places in {destination.name}.</p>
//         </div>
//          {/* Buttons */}
//          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
//           <button className="btn btn-custom mx-2" onClick={goBack}>Go Back</button>
//           <button className="btn btn-custom" onClick={goToInputForm}>Back to Input Form</button>
//         </div>

//       </div>
 
//   );
// };

// export default Itinerary;



import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Itinerary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { destination, xid } = location.state || {}; // Assume xid is passed along with destination
  const [imageUrl, setImageUrl] = useState('');
  const [wikiExtract, setWikiExtract] = useState('');
  const [openTripImageUrl, setOpenTripImageUrl] = useState('');
  const [airQuality, setAirQuality] = useState({});
  const [culturalDetailsUrl, setCulturalDetailsUrl] = useState('');

  useEffect(() => {
    // Fetch image from Pixabay
    if (destination?.name) {
      fetchPixabayImage(destination.name);
    }
    // Fetch details from OpenTripMap
    if (xid) {
      fetchOpenTripDetails(xid);
      fetchCulturalDetails(xid);
    }
    if (destination?.lat && destination?.lon) {
      fetchAirPollutionData(destination.lat, destination.lon);
    }

  }, [destination]);

  const fetchPixabayImage = () => {
    const PIXABAY_API_KEY = '42934319-68bf0be7d32d5ca42dc600577';
    const query = encodeURIComponent(destination.name);
    const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&pretty=true&category=travel`;

    axios.get(url)
      .then(response => {
        const hits = response.data.hits;
        if (hits.length > 0) {
          setImageUrl(hits[0].webformatURL);
        } else {
          setImageUrl('/path/to/default/image.jpg');
        }
      })
      .catch(error => console.error('Error fetching image:', error));
  };

  const fetchOpenTripDetails = (xid) => {
    const apiKey = '5ae2e3f221c38a28845f05b68acc8b0fd95abbfe34a7353ee5151d82';
    const lang = 'en';
    axios.get(`https://api.opentripmap.com/0.1/${lang}/places/xid/${xid}?apikey=${apiKey}`)
    .then(response => {
        const data = response.data;
        setWikiExtract(data.wikipedia_extracts?.text || '');
        setOpenTripImageUrl(data.preview?.source || ''); // Assuming there's a preview image available
      })
      .catch(error => console.error('Error fetching OpenTripMap details:', error));
  };


  const fetchAirPollutionData = (lat, lon) => {
    const API_KEY = '4a311bf45c785a430f6090826f0844cb';
    axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(response => {
        console.log('Air Pollution API response:', response.data);
        setAirQuality(response.data.list[0]);
      })
      .catch(error => console.error('Error fetching air pollution data:', error));
  };

  const fetchCulturalDetails = (xid) => {
    const apiKey = '5ae2e3f221c38a28845f05b68acc8b0fd95abbfe34a7353ee5151d82';
    const lang = 'en';
    axios.get(`https://api.opentripmap.com/0.1/${lang}/cultural/xid/${xid}?apikey=${apiKey}`)
      .then(response => {
        const culturalData = response.data;
        setCulturalDetailsUrl(culturalData.wikipedia || ''); // Assuming cultural data has a Wikipedia link
      })
      .catch(error => console.error('Error fetching cultural details:', error));
  };
  
  // Remaining component logic...

  return (
    <div className="itinerary-container d-flex flex-column align-items-center justify-content-center mt-5">
      <h2 className="section-title">Itinerary For Your Trip</h2>
   
      {/* Image from Pixabay or OpenTripMap */}
      <img src={openTripImageUrl || imageUrl} alt="Destination" className="img-fluid my-4" />
      {/* Wikipedia extracts */}
      <p>{wikiExtract || `Details about your trip to ${destination.name} will go here.`}</p>
      {/* Additional content and buttons */}

      <div className="mb-4">
        <h3 className="section-title">Culture</h3>
        {/* Image from Pixabay or OpenTripMap */}
      <img src={culturalDetailsUrl || imageUrl} alt="Destination" className="img-fluid my-4" />
        <p>Cultural activities and options in {destination?.name}.</p>
      </div>

      <div className="mb-4">
        <h3 className="section-title">Landmarks</h3>
        <p>Famous landmarks to visit in {destination?.name}.</p>
      </div>

      <div className="mb-4">
        <h3 className="section-title">To See</h3>
        <p>Must-see places in {destination?.name}.</p>
      </div>

      <div>
        <h3>Air Quality Information</h3>
        <p>Air Quality Index (AQI): {airQuality?.main?.aqi}</p>
        {/* Add more detailed information as needed */}
      </div>
      
      {/* Custom-styled Navigation Buttons */}
<div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
  <button className="btn btn-custom mx-2" onClick={() => navigate(-1)}>Go Back</button>
  <button className="btn btn-custom" onClick={() => navigate('/')}>Back to Input Form</button>
</div>

    </div>
  );
};

export default Itinerary;
