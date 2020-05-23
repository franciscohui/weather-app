import React, { useState } from "react";

function ShowWeather() {
  const [weather, setWeather] = useState();

  function getWeather() {
    fetchWeather();
  }

  function fetchWeather() {
    const weatherHourlyForecast =
      "https://api.weather.gov/gridpoints/OKX/35,35/forecast/hourly";

    fetch(weatherHourlyForecast)
      .then(initialResponse => initialResponse.json())
      .then(dataFromResponse => {
        console.log(dataFromResponse.properties.periods);
        setWeather(List(dataFromResponse.properties.periods));
      });
  }

  function List(props) {
    const listOfHours = props;
    const listItems = listOfHours.map((hour, index) => (
      <li key={index}>{hour.temperature}°F</li>
    ));
    // console.log({ listItems });
    return <ul>{listItems}</ul>;
  }

  return (
    <div>
      <button onClick={getWeather}>Show More Weather</button>
      <div>{weather}</div>
    </div>
  );
}

export default ShowWeather;
