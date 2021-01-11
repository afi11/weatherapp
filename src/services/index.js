import { GET_LOC_DEC, GET_WEATHER } from "./get";

const getWeatherData = (latitude, longitude) =>
  GET_WEATHER(latitude, longitude);
const getLocDec = (latitude, longitude) => GET_LOC_DEC(latitude, longitude);

const API = {
  getWeatherData,
  getLocDec,
};

export default API;
