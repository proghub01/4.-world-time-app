import React, { useState } from "react";
import CityInput from "./components/CityInput";
import CityList from "./components/CityList";
import './App.css';

function App() {
  const [cities, setCities] = useState([]);

  const addCity = (city) => {
    setCities([...cities, city]);
  };

  const deleteCity = (cityName) => {
    const updatedCities = cities.filter((city) => city.name !== cityName);
    setCities(updatedCities);
  };

  return (
    <div className="App">
      <h1>World Clock</h1>
      <CityInput onAddCity={addCity} />
      <CityList cities={cities} onDeleteCity={deleteCity} />
    </div>
  );
}

export default App;
