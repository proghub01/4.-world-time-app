import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlinePlus } from 'react-icons/ai';

import CityInputCSS from './CityInput.module.css';

function CityInput({ onAddCity }) {
    const [cityName, setCityName] = useState('');

    const handleAddCity = async () => {
        try {
            const response = await axios.get(`https://worldtimeapi.org/api/timezone/Europe/${cityName}`);
            const cityData = {
                name: cityName,
                time: response.data.datetime,
                timezone: response.data.timezone,
            };
            onAddCity(cityData);
            setCityName('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={CityInputCSS.cityInputBlock}>
            <input
                type="text"
                placeholder="Choose the city"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
            />
            <button onClick={handleAddCity}>
                <AiOutlinePlus />
            </button>
        </div>
    );
}

export default CityInput;

