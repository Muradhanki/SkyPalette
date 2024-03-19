// import React, { useState } from 'react';
// import { fetchWeatherData, fetchEventData } from './api'; //Functions to fetch data

// const HolidayPlanner = () => {
// const [datesOfTravel, setDatesOfTravel] = useState({ startDate: '', endDate: ''})
// const [climatePreference, setClimatePreference] = useState('');
// const [activities, setActivities] = useState([]);

// const handleSubmit = async (event) =>  {
//     event.preventDefault();
//     //Make API calls with user input
//     const weatherData = await fetchWeatherData(datesOfTravel, climatePreference);
//     const eventData = await fetchEventData(datesOfTravel, activities);
//     //Process API responses and update state
//     // Display results to the user
// };

// return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <label>
// Start Date:
// <input type="date" value={datesOfTravel.startDate} onChange={(e) => setDatesOfTravel({ ...datesOfTravel, startDate: e.target.value })} />
//             </label>
//             <label>
//                 End Date:
//                <input type="date" value={datesOfTravel.endDate} onChange={(e) => setDatesOfTravel({ ...datesOfTravel, endDate: e.target.value })}/>
//             </label>
//             {/* Add more input fields for climate preference and activities */}
//         <button type="submit">Submit</button>
//             </form>
//     </div>
// );
// };

// export default HolidayPlanner;



//NEW natt5


// import React, { useState } from 'react';

// const UserInputForm = () => {
//   const [datesOfTravel, setDatesOfTravel] = useState({ startDate: '', endDate: '' });
//   const [climatePreference, setClimatePreference] = useState('');
//   const [activity, setActivity] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log({ datesOfTravel, climatePreference, activity });
//     // Placeholder for API call handling and result processing
//   };

//   return (
//     <div className="container d-flex justify-content-center">
//       <form onSubmit={handleSubmit} className="w-50 mt-5 mb-5 form-container">
//         {/* Travel Dates */}
//         <div className="mb-3">
//           <label htmlFor="startDate" className="form-label">Start Date:</label>
//           <input type="date" className="form-control" id="startDate" value={datesOfTravel.startDate} onChange={(e) => setDatesOfTravel({ ...datesOfTravel, startDate: e.target.value })} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="endDate" className="form-label">End Date:</label>
//           <input type="date" className="form-control" id="endDate" value={datesOfTravel.endDate} onChange={(e) => setDatesOfTravel({ ...datesOfTravel, endDate: e.target.value })} />
//         </div>

//         {/* Climate Preference */}
//         <div className="mb-3">
//           <label htmlFor="climatePreference" className="form-label">Climate Preference:</label>
//           <select className="form-select" id="climatePreference" value={climatePreference} onChange={(e) => setClimatePreference(e.target.value)}>
//             <option value="">Select a climate...</option>
//             <option value="warm">Warm</option>
//             <option value="hot">Hot</option>
//             <option value="mild">Mild</option>
//             <option value="dry">Dry</option>
//             <option value="cold">Cold</option>
//             <option value="polar">Polar</option>
//           </select>
//         </div>

//         {/* Activities */}
//         <div className="mb-3">
//           <label htmlFor="activity" className="form-label">Activities:</label>
//           <select className="form-select" id="activity" value={activity} onChange={(e) => setActivity(e.target.value)}>
//             <option value="">Select an activity...</option>
//             <option value="hiking">Hiking</option>
//             <option value="skiing">Skiing</option>
//             <option value="swimming">Swimming</option>
//             <option value="sightseeing">Sightseeing</option>
//             <option value="relaxing">Relaxing</option>
//           </select>
//         </div>

//         {/* Submit Button */}
//         <div className="d-grid gap-2">
//           <button type="submit" className="btn btn-custom">Let's Travel!</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserInputForm;

//new fixed date picker with react library

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

// const UserInputForm = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [climatePreference, setClimatePreference] = useState('');
//   const [activity, setActivity] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log({
//       startDate,
//       endDate,
//       climatePreference,
//       activity
//     });
//     // Here we handle form submission, by making an API call
//   };

//   return (
//     <div className="container d-flex justify-content-center">
//       <form onSubmit={handleSubmit} className="w-50 mt-5 mb-5 form-container">
//         {/* Start Date */}
//         <div className="mb-3">
//           <label htmlFor="startDate" className="form-label">Start Date:</label>
//           <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="form-control" dateFormat="MMMM d, yyyy" />
//         </div>
//         {/* End Date */}
//         <div className="mb-3">
//           <label htmlFor="endDate" className="form-label">End Date:</label>
//           <DatePicker selected={endDate} onChange={date => setEndDate(date)} className="form-control" dateFormat="MMMM d, yyyy" />
//         </div>
//         {/* Climate Preference */}
//         <div className="mb-3">
//           <label htmlFor="climatePreference" className="form-label">Climate Preference:</label>
//           <select className="form-select" value={climatePreference} onChange={e => setClimatePreference(e.target.value)} id="climatePreference">
//             <option value="">Select a climate...</option>
//             <option value="warm">Warm</option>
//             <option value="hot">Hot</option>
//             <option value="mild">Mild</option>
//             <option value="dry">Dry</option>
//             <option value="cold">Cold</option>
//             <option value="polar">Polar</option>
//           </select>
//         </div>
//         {/* Activities */}
//         <div className="mb-3">
//           <label htmlFor="activity" className="form-label">Activities:</label>
//           <select className="form-select" value={activity} onChange={e => setActivity(e.target.value)} id="activity">
//             <option value="">Select an activity...</option>
//             <option value="hiking">Hiking</option>
//             <option value="skiing">Skiing</option>
//             <option value="swimming">Swimming</option>
//             <option value="sightseeing">Sightseeing</option>
//             <option value="relaxing">Relaxing</option>
//           </select>
//         </div>
//         {/* Submit Button */}
//         <div className="d-grid gap-2">
//           <button type="submit" className="btn btn-custom">Let's Travel!</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// // export default UserInputForm;
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const UserInputForm = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [climatePreference, setClimatePreference] = useState('');
//   const [activity, setActivity] = useState('');

//   const navigate = useNavigate(); // Use the useNavigate hook

//     // Updated mapping with more activities
//     const activityToKindMap = {
//       "Hiking": "nature_reserves",
//       "Sightseeing": "cultural",
//       "Beaches": "beaches",
//       "Museums": "museums",
//       "Parks and Gardens": "gardens_and_parks",
//       "Historical Sites": "historic",
//       "Water Sports": "diving",
//       "Skiing": "winter_sports",
//       "Urban Exploration": "urban_environment",
//       "Wildlife Observation": "wildlife_reserves",
//       "Archaeological Sites": "archaeology",
//       "Castles and Fortifications": "fortifications",
//       "Religious Sites": "religion",
//       "Modern Architecture": "architecture",
//       "Amusement Parks": "amusement_parks",
//       "Adventure Sports": "climbing",
//       "Surfing": "surfing",
//       "Casinos": "casino",
//       "Nightlife": "nightclubs",
//       "Wine Tasting": "wineries",
//       "Shopping": "shops",
//       "Gastronomy": "foods",
//       "Camping": "campsites",
//       "Luxury Stays": "resorts",
//       "Hostels": "hostels",
//       "Cultural Exhibitions": "theatres_and_entertainments",
//       "Aquatic Adventures": "water_parks",
//       "Nature Reserves": "nature_reserves_others",
//       // Add more as needed based on your application's scope
//     };



//   const mapUserActivityToKind = (activity) => {
//     // Find the kind based on the selected activity
//     const kind = Object.keys(activityToKindMap).find(key => key.toLowerCase() === activity.toLowerCase());
//     return activityToKindMap[kind] || '';
//   };


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log({
//       startDate,
//       endDate,
//       climatePreference,
//       activity
//     });

//     const kind = mapUserActivityToKind(activity.toLowerCase());

  

//         // Example API call (adjust according to actual API and parameters)
//         const API_KEY = '5ae2e3f221c38a28845f05b6bae24c710f5c700ecb82ce6c74e24106';
        
//         try {
//           const response = await axios.get(`https://api.opentripmap.com/0.1/en/places/radius`, {
//             params: {
//               radius: 100000, // Adjust as necessary
//               lon: 12.4924, // Example longitude, adjust as necessary
//               lat: 41.8902, // Example latitude, adjust as necessary
//               kinds: kind,
//               apikey: API_KEY,
//             }
//           });
    

//      // If successful, navigate to Results page with fetched destinations
//       navigate('/results', { state: { destinations: response.data.features } });
//     } catch (error) {
//       console.error("Failed to fetch destinations", error);
//     }
//   };

  

//   return (
//     <div className="container d-flex justify-content-center">
//       <form onSubmit={handleSubmit} className="w-50 mt-5 mb-5 form-container">

//         {/* Start Date */}
//         <div className="mb-3">
//           <label htmlFor="startDate" className="form-label">Start Date:</label>
//           <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="form-control" dateFormat="MMMM d, yyyy" />
//         </div>

//         {/* End Date */}
//         <div className="mb-3">
//           <label htmlFor="endDate" className="form-label">End Date:</label>
//           <DatePicker selected={endDate} onChange={date => setEndDate(date)} className="form-control" dateFormat="MMMM d, yyyy" />
//         </div>

//         {/* Climate Preference */}
//         <div className="mb-3">
//           <label htmlFor="climatePreference" className="form-label">Climate Preference:</label>
//           <select className="form-select" value={climatePreference} onChange={e => setClimatePreference(e.target.value)} id="climatePreference">
//             <option value="">Select a climate...</option>
//             <option value="warm">Warm</option>
//             <option value="hot">Hot</option>
//             <option value="mild">Mild</option>
//             <option value="dry">Dry</option>
//             <option value="cold">Cold</option>
//             <option value="polar">Polar</option>
//           </select>
//         </div>


//                {/* Activities - Updated to use the keys from activityToKindMap */}
//                <div className="mb-3">
//           <label htmlFor="activity" className="form-label">Activities:</label>
//           <select className="form-select" value={activity} onChange={e => setActivity(e.target.value)} id="activity">
//             <option value="">Select an activity...</option>
//             {Object.keys(activityToKindMap).map(act => (
//               <option key={act} value={act}>{act}</option>
//             ))}
//           </select>
//         </div>


//         {/* Submit Button */}
//         <div className="d-grid gap-2">
//           <button type="submit" className="btn btn-custom">Let's Travel!</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserInputForm;

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Autosuggest from 'react-autosuggest'; // Import Autosuggest

const UserInputForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activity, setActivity] = useState('');
  const [showAlert, setShowAlert] = useState(false); // State for showing alert
  const [alertMessage, setAlertMessage] = useState(''); // State for alert message
  const [recentSearches, setRecentSearches] = useState([]);

  const clearRecentSearches = () => {
    setRecentSearches([]); // Clear recent searches from state
    localStorage.removeItem('recentSearches'); // Remove recent searches from local storage
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
          // Add more as needed based on our application's scope
  };

    // Load recent searches from local storage
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
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct`, {
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


  //For date validation

  useEffect(() => {
    if (endDate < startDate) {
      setAlertMessage('Please select an end date that is today or in the future.');
      setShowAlert(true);
    } else {
      // Clear the alert message when the dates are valid
      setShowAlert(false);
      setAlertMessage('');
    }
  }, [startDate, endDate]); // Depend on startDate and endDate to trigger the validation
  

  const updateRecentSearches = (newSearch) => {
    const updatedSearches = [newSearch, ...recentSearches].slice(0, 5); // Keep only the latest 5 searches
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

    // Assume the first suggestion is the desired location
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


            // Update recent searches
            const searchDetails = {
              destination: suggestions[0].name, // Assuming 'name' is what you want to display
              startDate: startDate.toISOString(), // Storing as ISO string for simplicity
              endDate: endDate.toISOString(),
              activity
            };
            updateRecentSearches(searchDetails);
  
      navigate('/results', { state: { destinations: response.data.features } });
      //hide the alert on success submission
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
        // Optionally, trigger the search again
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

             {/* Bootstrap Alert */}
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

 {/* Clear saved searches button */}

<div className="d-grid gap-2 mt-3">
  <button type="button" className="btn btn-clear" onClick={clearRecentSearches}>Clear Saved Interests</button>
</div>

      </form>
    </div>
  );
};

export default UserInputForm;

