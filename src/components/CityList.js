import React from 'react';
import CityItem from './CityItem';

import CityListCSS from './CityList.module.css';

function CityList({ cities, onDeleteCity }) {
    return (
        <div className={CityListCSS.cityListBlock}>
            {cities.length != 0 ? (
                <div className={CityListCSS.cityList}>
                    {cities.map((city, index) => (
                        <CityItem key={index} city={city} onDeleteCity={onDeleteCity} />
                    ))}
                </div>
            ): <h2 className={CityListCSS.noClocks}>No World Clocks</h2>}
            
        </div>
    );
}

export default CityList;
