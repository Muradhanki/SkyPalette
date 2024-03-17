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

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const UserInputForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [climatePreference, setClimatePreference] = useState('');
  const [activity, setActivity] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({
      startDate,
      endDate,
      climatePreference,
      activity
    });
    // Here we handle form submission, by making an API call
  };

  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="w-50 mt-5 mb-5 form-container">
        {/* Start Date */}
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date:</label>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="form-control" dateFormat="MMMM d, yyyy" />
        </div>
        {/* End Date */}
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">End Date:</label>
          <DatePicker selected={endDate} onChange={date => setEndDate(date)} className="form-control" dateFormat="MMMM d, yyyy" />
        </div>
        {/* Climate Preference */}
        <div className="mb-3">
          <label htmlFor="climatePreference" className="form-label">Climate Preference:</label>
          <select className="form-select" value={climatePreference} onChange={e => setClimatePreference(e.target.value)} id="climatePreference">
            <option value="">Select a climate...</option>
            <option value="warm">Warm</option>
            <option value="hot">Hot</option>
            <option value="mild">Mild</option>
            <option value="dry">Dry</option>
            <option value="cold">Cold</option>
            <option value="polar">Polar</option>
          </select>
        </div>
        {/* Activities */}
        <div className="mb-3">
          <label htmlFor="activity" className="form-label">Activities:</label>
          <select className="form-select" value={activity} onChange={e => setActivity(e.target.value)} id="activity">
            <option value="">Select an activity...</option>
            <option value="hiking">Hiking</option>
            <option value="skiing">Skiing</option>
            <option value="swimming">Swimming</option>
            <option value="sightseeing">Sightseeing</option>
            <option value="relaxing">Relaxing</option>
          </select>
        </div>
        {/* Submit Button */}
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-custom">Let's Travel!</button>
        </div>
      </form>
    </div>
  );
};

export default UserInputForm;
