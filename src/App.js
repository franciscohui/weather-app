import React from "react";
import HourlyWeather from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div>
      <HourlyWeather />
    </div>
  );
}

/*
Part 1
> log weather API into console
> pull hourly data into list
> iterate through list to display each hourly element
> display list onComponentDidMount()

Part 2
> User can enter a new zip code to change the location

Part 3
> prettyfy and visualize the data

Part 4
> Add more metrics: wind, precipitation %, conditions

*/
