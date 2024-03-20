

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

const UserInputForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activity, setActivity] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };
  
  const navigate = useNavigate();

  const activityToKindMap = {
    "Hiking": "nature_reserves",
          "Sightseeing": "cultural",
          "Beaches": "beaches",
          "Museums": "museums",
          "Parks and Gardens": "gardens_and_parks",
          "Historical Sites": "historic",
          "Water Sports": "diving",
          "Skiing": "winter_sports",
          "Urban Exploration": "urban_environment",
          "Wildlife Observation": "wildlife_reserves",
          "Archaeological Sites": "archaeology",
          "Castles and Fortifications": "fortifications",
          "Religious Sites": "religion",
          "Modern Architecture": "architecture",
          "Amusement Parks": "amusement_parks",
          "Adventure Sports": "climbing",
          "Surfing": "surfing",
          "Casinos": "casino",
          "Nightlife": "nightclubs",
          "Wine Tasting": "wineries",
          "Shopping": "shops",
          "Gastronomy": "foods",
          "Camping": "campsites",
          "Luxury Stays": "resorts",
          "Hostels": "hostels",
          "Cultural Exhibitions": "theatres_and_entertainments",
          "Aquatic Adventures": "water_parks",
          "Nature Reserves": "nature_reserves_others",
        
  };

    useEffect(() => {
      const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
      setRecentSearches(storedSearches);
    }, []);
  
  useEffect(() => {
    if (destination.length < 3) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
          params: {
            q: destination,
            limit: 5,
            appid: '4a311bf45c785a430f6090826f0844cb',
          }
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching location suggestions", error);
      }
    };

    fetchSuggestions();
  }, [destination]);


  useEffect(() => {
    if (endDate < startDate) {
      setAlertMessage('Please select an end date that is today or in the future.');
      setShowAlert(true);
    } else {
   
      setShowAlert(false);
      setAlertMessage('');
    }
  }, [startDate, endDate]); 
  

  const updateRecentSearches = (newSearch) => {
    const updatedSearches = [newSearch, ...recentSearches].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (suggestions.length === 0) {
      setAlertMessage('Please enter a valid destination');
      setShowAlert(true);
      return;
    }

 
    const { lat, lon } = suggestions[0];

    const kind = activityToKindMap[activity] || '';

    try {
      const response = await axios.get(`https://api.opentripmap.com/0.1/en/places/radius`, {
        params: {
          radius: 100000,
          lon,
          lat,
          kinds: kind,
          apikey: '5ae2e3f221c38a28845f05b68acc8b0fd95abbfe34a7353ee5151d82',
        }
      });

            const searchDetails = {
              destination: suggestions[0].name,
              startDate: startDate.toISOString(),
              endDate: endDate.toISOString(),
              activity
            };
            updateRecentSearches(searchDetails);
  
      navigate('/results', { state: { destinations: response.data.features } });
  
      setShowAlert(false);
    } catch (error) {
      console.error("Failed to fetch destinations", error);
    }
  };
  
    const handleRecentSearchSelect = (event) => {
      const selectedIndex = event.target.value;
      const selectedSearch = recentSearches[selectedIndex];
      
      if (selectedSearch) {
        setDestination(selectedSearch.destination);
        setStartDate(new Date(selectedSearch.startDate));
        setEndDate(new Date(selectedSearch.endDate));
        setActivity(selectedSearch.activity);

      }
    };
    
  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="w-50 mt-5 mb-5 form-container">
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date:</label>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="form-control" dateFormat="MMMM d, yyyy" minDate={new Date()} />
        </div>

        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">End Date:</label>
          <DatePicker selected={endDate} onChange={date => setEndDate(date)} className="form-control" dateFormat="MMMM d, yyyy"minDate={startDate} />
        </div>

             {showAlert && (
          <div className="alert alert-danger" role="alert">
            {alertMessage}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="destination" className="form-label">Destination:</label>
          <input type="text" className="form-control" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} list="suggestions"/>
          <datalist id="suggestions">
            {suggestions.map((suggestion, index) => (
              <option key={index} value={suggestion.name} />
            ))}
          </datalist>
        </div>

        <div className="mb-3">
          <label htmlFor="activity" className="form-label">Activity:</label>
          <select className="form-select" value={activity} onChange={e => setActivity(e.target.value)} id="activity">
            <option value="">Select an activity...</option>
            {Object.keys(activityToKindMap).map((activity) => (
              <option key={activity} value={activity}>{activity}</option>
            ))}
          </select>
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-custom">Let's Travel!</button>
        </div>


<div className="mb-3 dropdown-select-container">

  <select className="form-select" onChange={handleRecentSearchSelect}>
    <option>Select Your Saved Interests</option>
    {recentSearches.map((search, index) => (
      <option key={index} value={index}>
        {`${search.destination} - ${search.activity} (${new Date(search.startDate).toLocaleDateString()} to ${new Date(search.endDate).toLocaleDateString()})`}
      </option>
    ))}
  </select>
</div>


<div className="d-grid gap-2 mt-3">
  <button type="button" className="btn btn-clear" onClick={clearRecentSearches}>Clear Saved Interests</button>
</div>

      </form>
    </div>
);
};

export default UserInputForm;

