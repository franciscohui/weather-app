import React, { useState } from "react";

function Weather() {
  const [weather, setWeather] = useState();

  function fetchWeather() {
    const weatherHourlyForecast =
      "https://api.weather.gov/gridpoints/OKX/35,35/forecast/hourly";

    fetch(weatherHourlyForecast)
      .then(initialResponse => initialResponse.json())
      .then(responseJSON => {
        console.log(responseJSON.properties.periods);
        setWeather(HourlyWeather(responseJSON.properties.periods));
      });
  }

  function HourlyWeather(props) {
    const eachHour = props.map((hour, index) => (
      <li key={index}>{hour.temperature}°F</li>
    ));
    return <ul>{eachHour}</ul>;
  }

  return (
    <div>
      <button onClick={fetchWeather}>Show weather</button>
      <div>{weather}</div>
    </div>
  );
}

export default Weather;
