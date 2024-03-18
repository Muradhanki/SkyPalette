import React, { useState } from 'react';
import { fetchWeatherData, fetchEventData } from './api'; //Functions to fetch data

const HolidayPlanner = () => {
const [datesOfTravel, setDatesOfTravel] = useState({ startDate: '', endDate: ''})
const [climatePreference, setClimatePreference] = useState('');
const [activities, setActivities] = useState([]);

const handleSubmit = async (event) =>  {
    event.preventDefault();
    //Make API calls with user input
    const weatherData = await fetchWeatherData(datesOfTravel, climatePreference);

return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
Start Date:
<input type="date" value={datesOfTravel.startDate} onChange={(e) => setDatesOfTravel({ ...datesOfTravel, startDate: e.target.value })} />
            </label>
            <label>
                End Date:
               <input type="date" value="{datesOfTravel.endDate}" onChange={(e) => setDatesOfTravel({ ...datesOfTravel, endDate: e.target.value })}/>
            </label>
            {/* Add more input fields for climate preference and activities */}
        <button type="submit">Submit</button>
            </form>
    </div>
);
};

export default HolidayPlanner;