import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

import CityItemCSS from './CityItem.module.css';

function CityItem({ city, onDeleteCity }) {
    const [currentTime, setCurrentTime] = useState(moment().tz(city.timezone).format('HH:mm'));

    useEffect(() => {
        const intervalId = setInterval(() => {
        const newTime = moment().tz(city.timezone).format('HH:mm');
            setCurrentTime(newTime);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [city.timezone]);

    const handleDeleteCity = () => {
        onDeleteCity(city.name);
    };

    return (
        <div className={CityItemCSS.cityItemBlock}>
            <strong className={CityItemCSS.cityName}>{city.name.toUpperCase()}:</strong> 
            <p className={CityItemCSS.cityTime}>{currentTime}</p>
            <button onClick={handleDeleteCity} className={CityItemCSS.deleteBtn}>Delete</button>
        </div>
    );
}

export default CityItem;
