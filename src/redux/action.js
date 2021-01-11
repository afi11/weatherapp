import API from "../services";
import {
  SET_OPTION,
  SET_REV_LOC,
  SET_WEATHER,
  SET_WEATHER_DESC,
} from "./types";

const setRevLoc = (value) => {
  return { type: SET_REV_LOC, inputValue: value };
};

export const setOption = (value) => {
  return { type: SET_OPTION, inputValue: value };
};

const setWeather = (value) => {
  return { type: SET_WEATHER, inputValue: value };
};

const setWeatherDesc = (value) => {
  return { type: SET_WEATHER_DESC, inputValue: value };
};

export const getRevLoc = (latitude, longitude) => {
  return (dispatch) => {
    API.getLocDec(latitude, longitude).then((result) => {
      dispatch(setRevLoc(result.display_name));
    });
  };
};

export const getWeather = (latitude, longitude) => {
  return (dispatch) => {
    API.getWeatherData(latitude, longitude).then((result) => {
      dispatch(setWeather(result.main));
      dispatch(setWeatherDesc(result.weather));
    });
  };
};
