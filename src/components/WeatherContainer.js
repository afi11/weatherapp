import React from "react";
import { toCelcius } from "../utils";

const WeatherContainer = ({ weather, weatherDesc, icon, option }) => {
  return (
    <>
      <img src={icon} alt="Image Weather" />
      <p className="text-lg font-medium text-green-900">
        {option === null
          ? toCelcius(weather.temp)
          : option.option === "c"
          ? toCelcius(weather.temp)
          : weather.temp + " °F"}
      </p>
      <div className="flex flex-col">
        <p>
          Conditions : {weatherDesc.main} {weatherDesc.description}
        </p>
        <p>
          Temperature :{" "}
          {option === null
            ? toCelcius(weather.temp)
            : option.option === "c"
            ? toCelcius(weather.temp)
            : weather.temp + " °F"}
        </p>
        <p>
          Min Temperature :{" "}
          {option === null
            ? toCelcius(weather.temp)
            : option.option === "c"
            ? toCelcius(weather.temp_min)
            : weather.temp_min + " °F"}
        </p>
        <p>
          Max Temperature :{" "}
          {option === null
            ? toCelcius(weather.temp)
            : option.option === "c"
            ? toCelcius(weather.temp_max)
            : weather.temp_max + " °F"}
        </p>
        <p>
          Feels Like :{" "}
          {option === null
            ? toCelcius(weather.temp)
            : option.option === "c"
            ? toCelcius(weather.feels_like)
            : weather.feels_like + " °F"}
        </p>
        <p>Pressure : {weather.pressure} hpa</p>
        <p>Humidity : {weather.humidity} %</p>
      </div>
    </>
  );
};

export default WeatherContainer;
