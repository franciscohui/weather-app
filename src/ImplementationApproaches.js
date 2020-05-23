import React, { useState } from "react";
import "./styles.css";

/*
FIRST APPROACH
Got stuck on iterating through the objects

*/

// STARTED BY GETTING THE URL SPECIFIC TO NYC
// const locationLatitude = "40.730610";
// const locationLongitude = "-73.935242";
/*
const weatherDataURL =
  "https://api.weather.gov/points/" +
  locationLatitude +
  "," +
  locationLongitude;
*/

// console.log({ weatherDataURL });

// initial fetch to get hourly URL
// fetch(weatherDataURL)
//   .then(initialResponse => initialResponse.json())
//   .then(hourLyForecast =>
//     console.log(hourLyForecast.properties.forecastHourly)
//   );
// properties.periods

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState();

  const onShowWeather = () => {
    // console.log("button pressed")
    const weatherHourlyForecast =
      "https://api.weather.gov/gridpoints/OKX/35,35/forecast/hourly";

    fetch(weatherHourlyForecast)
      .then(initialResponse => initialResponse.json())
      .then(dataFromResponse => {
        setCurrentWeather(dataFromResponse.properties);
        // const hourlyData = [dataFromResponse.properties.periods];
        // const hourly = hourlyData.map(hourly => <p>{hourly.temperature})</p>,
        console.log(dataFromResponse.properties.periods);
      });
    // const hourlyWeather = dataFromResponse.;
  };
  return (
    <div>
      <h1>Weather App</h1>
      <p>The weather is: </p>
      <button onClick={onShowWeather}>Show weather</button>
    </div>
  );
};

export default Weather;

// function List(props) {
//   console.log("List component");
//   console.log(props);
//   const listOfHours = props.properties.periods;
//   const singleHour = listOfHours;
//   // console.log(listOfHours);
//   // console.log(singleHour[2].temperature);
//   // const singleHourChild = singleHour;
//   // console.log(staticWeatherData.properties.periods);

//   const listItems = singleHour.map((hour, index) => (
//     <li key={index}>
//       <span>{hour.startTime} </span>
//       {hour.temperature}°F
//     </li>
//   ));
//   console.log({ listItems });
//   return <ul>{listItems}</ul>;
// }

// WORKED WITH STATIC DATA TO SEE IF I COULD ITERATE THROUGH IT

// const staticWeatherData = {
//   "@context": [
//     "https://raw.githubusercontent.com/geojson/geojson-ld/master/contexts/geojson-base.jsonld",
//     {
//       wx: "https://api.weather.gov/ontology#",
//       geo: "http://www.opengis.net/ont/geosparql#",
//       unit: "http://codes.wmo.int/common/unit/",
//       "@vocab": "https://api.weather.gov/ontology#"
//     }
//   ],
//   type: "Feature",
//   geometry: {
//     type: "GeometryCollection",
//     geometries: [
//       {
//         type: "Point",
//         coordinates: [-73.922730700000002, 40.726024500000001]
//       },
//       {
//         type: "Polygon",
//         coordinates: [
//           [
//             [-73.934794100000005, 40.738561900000001],
//             [-73.939274600000005, 40.716883100000004],
//             [-73.910670300000007, 40.713485400000003],
//             [-73.906183900000002, 40.735163800000002],
//             [-73.934794100000005, 40.738561900000001]
//           ]
//         ]
//       }
//     ]
//   },
//   properties: {
//     updated: "2020-05-22T13:23:11+00:00",
//     units: "us",
//     forecastGenerator: "HourlyForecastGenerator",
//     generatedAt: "2020-05-22T14:45:14+00:00",
//     updateTime: "2020-05-22T13:23:11+00:00",
//     validTimes: "2020-05-22T07:00:00+00:00/P7D",
//     elevation: { value: 14.9352, unitCode: "unit:m" },
//     periods: [
//       {
//         number: 1,
//         name: "",
//         startTime: "2020-05-22T10:00:00-04:00",
//         endTime: "2020-05-22T11:00:00-04:00",
//         isDaytime: true,
//         temperature: 67,
//         temperatureUnit: "F",
//         temperatureTrend: null,
//         windSpeed: "5 mph",
//         windDirection: "E",
//         icon: "https://api.weather.gov/icons/land/day/sct?size=small",
//         shortForecast: "Mostly Sunny",
//         detailedForecast: ""
//       },
//       {
//         number: 2,
//         name: "",
//         startTime: "2020-05-22T11:00:00-04:00",
//         endTime: "2020-05-22T12:00:00-04:00",
//         isDaytime: true,
//         temperature: 69,
//         temperatureUnit: "F",
//         temperatureTrend: null,
//         windSpeed: "7 mph",
//         windDirection: "S",
//         icon: "https://api.weather.gov/icons/land/day/few?size=small",
//         shortForecast: "Sunny",
//         detailedForecast: ""
//       },
//       {
//         number: 3,
//         name: "",
//         startTime: "2020-05-22T12:00:00-04:00",
//         endTime: "2020-05-22T13:00:00-04:00",
//         isDaytime: true,
//         temperature: 70,
//         temperatureUnit: "F",
//         temperatureTrend: null,
//         windSpeed: "8 mph",
//         windDirection: "S",
//         icon: "https://api.weather.gov/icons/land/day/sct?size=small",
//         shortForecast: "Mostly Sunny",
//         detailedForecast: ""
//       },
//       {
//         number: 4,
//         name: "",
//         startTime: "2020-05-22T13:00:00-04:00",
//         endTime: "2020-05-22T14:00:00-04:00",
//         isDaytime: true,
//         temperature: 71,
//         temperatureUnit: "F",
//         temperatureTrend: null,
//         windSpeed: "9 mph",
//         windDirection: "S",
//         icon: "https://api.weather.gov/icons/land/day/sct?size=small",
//         shortForecast: "Mostly Sunny",
//         detailedForecast: ""
//       },
//       {
//         number: 5,
//         name: "",
//         startTime: "2020-05-22T14:00:00-04:00",
//         endTime: "2020-05-22T15:00:00-04:00",
//         isDaytime: true,
//         temperature: 71,
//         temperatureUnit: "F",
//         temperatureTrend: null,
//         windSpeed: "10 mph",
//         windDirection: "S",
//         icon: "https://api.weather.gov/icons/land/day/bkn?size=small",
//         shortForecast: "Partly Sunny",
//         detailedForecast: ""
//       },
//       {
//         number: 156,
//         name: "",
//         startTime: "2020-05-28T21:00:00-04:00",
//         endTime: "2020-05-28T22:00:00-04:00",
//         isDaytime: false,
//         temperature: 73,
//         temperatureUnit: "F",
//         temperatureTrend: null,
//         windSpeed: "12 mph",
//         windDirection: "S",
//         icon: "https://api.weather.gov/icons/land/night/sct?size=small",
//         shortForecast: "Partly Cloudy",
//         detailedForecast: ""
//       }
//     ]
//   }
// };

// WORKING WITH REAL DATA HERE. GOT STUCK ON USING THE DATA OUTSIDE THE FUNCTION

// function fetchWeather() {
//   const weatherHourlyForecast =
//     "https://api.weather.gov/gridpoints/OKX/35,35/forecast/hourly";

//   fetch(weatherHourlyForecast)
//     .then(initialResponse => initialResponse.json())
//     .then(dataFromResponse => {
//       List(dataFromResponse);
//     });
// .then(dataFromResponse => {
//   // setCurrentWeather(dataFromResponse.properties);
//   // const hourlyData = [dataFromResponse.properties.periods];
//   // const hourly = hourlyData.map(hourly => <p>{hourly.temperature})</p>,
//   console.log(dataFromResponse.properties.periods);})
// }

/* 
TRYING TO BREAK DOWN THE TASKS
  get the weather
  parse it
  iterate through it
  render it to the page

BRAINSTORMING DIFFERENT APPROACHES TO GET THE APP TO WORK
  two approaches: 
  have one function
  have list call fetch
  usestate to render, then update
*/

// EXAMPLE OF SIMPLE MAPPING THROUGH LISTS
// function List() {
//   const numbers = [1, 2, 3, 4];
//   const listItems = numbers.map(number => <li>{number}</li>);
//   return <ul>{listItems}</ul>;
// }

// function List (numbers) {
//   console.log(numbers);
//   return (
//     <ItemList numbers={numbers} />
//   )
// }

// export default List;
// create a varaible called listItems, take array in Numbers and map each item called number, and place it in the number placeholder.

// EXAMPLE TO ITERATE THROUGH OBJECTS.
// const shoppingCart = [
//   { id: 35, item: "jumper", color: "red", size: "medium", price: 20 },
//   { id: 42, item: "shirt", color: "blue", size: "medium", price: 15 },
//   { id: 71, item: "socks", color: "black", size: "all", price: 5 }
// ];
// console.log(shoppingCart);

// const numbers = [1, 2, 3, 4, 5];
// const numbers = props.numbers;
