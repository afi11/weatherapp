import React from "react";
// Redux
import { setOption, getWeather, getRevLoc } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
// Components
import { Button, WeatherContainer, ToggleButton } from "../../components";

const Home = () => {
  const locationName = useSelector((state) => state.getRevLoc);
  const weather = useSelector((state) => state.getWeather);
  const weatherDesc = useSelector((state) => state.getWeatherDesc);
  const option = useSelector((state) => state.getOption);
  let iconUrl = "";
  weatherDesc != null
    ? (iconUrl = `https://openweathermap.org/img/wn/${weatherDesc.weatherDesc[0].icon}@2x.png`)
    : (iconUrl = "");

  const dispatch = useDispatch();

  const btncelcius = document.querySelector(".btn-celcius");
  const btnfahrenheit = document.querySelector(".btn-fahrenheit");

  const toCelcius = () => {
    dispatch(setOption("c"));
    btncelcius.classList.add("bg-green-700");
    btnfahrenheit.classList.add("bg-green-700");
    btnfahrenheit.classList.remove("bg-green-700");
  };

  const toFahrenheit = () => {
    dispatch(setOption("f"));
    btncelcius.classList.add("bg-green-500");
    btncelcius.classList.remove("bg-green-700");
    btnfahrenheit.classList.add("bg-green-700");
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      dispatch(getRevLoc(latitude, longitude));
      dispatch(getWeather(latitude, longitude));
    });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-bg-cloud h-screen">
      <span className="text-center text-white text-2xl font-semibold mb-0">
        Get the weather informations of your current location
      </span>
      <span className="text-center text-white text-lg mb-5">
        by clik button below
      </span>
      <Button title="Get Weather Informations" onPress={getLocation} />
      {weather != null ? (
        <div className="md:flex flex max-w-md flex-row bg-white rounded px-6 py-6 mt-3">
          <div className="w-1/2 md:flex-shrink-0 bg-city h-auto mr-3">
            <h1 className="text-2xl text-white p-3">
              Your location at {locationName.revLoc}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ToggleButton
              option={option}
              toCelcius={toCelcius}
              toFahrenheit={toFahrenheit}
            />
            {weatherDesc != null ? (
              <WeatherContainer
                weather={weather.weather}
                weatherDesc={weatherDesc.weatherDesc[0]}
                icon={iconUrl}
                option={option}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
