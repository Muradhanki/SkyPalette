
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Itinerary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { destination, xid } = location.state || {};
  const [wikiExtract, setWikiExtract] = useState('');
  const [openTripImageUrl, setOpenTripImageUrl] = useState('');

  useEffect(() => {
    if (xid) {
      fetchOpenTripDetails(xid);
    }
  }, [xid]);

  const fetchOpenTripDetails = (xid) => {
    const apiKey = '5ae2e3f221c38a28845f05b68acc8b0fd95abbfe34a7353ee5151d82';
    axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${apiKey}`)
      .then(response => {
        setWikiExtract(response.data.wikipedia_extracts?.text || '');
        setOpenTripImageUrl(response.data.preview?.source || '');
      })
      .catch(error => console.error('Error fetching OpenTripMap details:', error));
  };

  return (
    <div className="container mt-5">
      <h2 className="section-title text-center mb-4">Itinerary For Your Trip</h2>
      <div className="row align-items-stretch">
        <div className="col-md-6">
          <div className="image-container p-3">
            <img src={openTripImageUrl} alt="Destination" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div className="text-container p-3 w-100">
            <h3>{destination.name}</h3>
            <p>{wikiExtract || `Explore the wonders of ${destination.name} on your trip.`}</p>
          </div>
        </div>
      </div>

      <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
        <button className="btn btn-custom mx-2" onClick={() => navigate(-1)}>Go Back</button>
        <button className="btn btn-custom" onClick={() => navigate('/')}>Back to Input Form</button>
      </div>
    </div>
  );
};

export default Itinerary;
