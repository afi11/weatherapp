import { combineReducers } from "redux";
import {
  SET_OPTION,
  SET_REV_LOC,
  SET_WEATHER,
  SET_WEATHER_DESC,
} from "./types";

const initialState = {
  revLoc: "",
  weather: null,
  weatherDesc: null,
  option: null,
};

const getRevLoc = (state = initialState.revLoc, action) => {
  if (action.type === SET_REV_LOC) {
    return {
      ...state,
      revLoc: action.inputValue,
    };
  }
  return state;
};

const getOption = (state = initialState.option, action) => {
  if (action.type === SET_OPTION) {
    return {
      ...state,
      option: action.inputValue,
    };
  }
  return state;
};

const getWeather = (state = initialState.weather, action) => {
  if (action.type === SET_WEATHER) {
    return {
      ...state,
      weather: action.inputValue,
    };
  }
  return state;
};

const getWeatherDesc = (state = initialState.weatherDesc, action) => {
  if (action.type === SET_WEATHER_DESC) {
    return {
      ...state,
      weatherDesc: action.inputValue,
    };
  }
  return state;
};

const reducer = combineReducers({
  getRevLoc,
  getWeather,
  getWeatherDesc,
  getOption,
});

export default reducer;
