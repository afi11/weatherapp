import axios from "axios";
import { url_loc_dec, url_weather } from "../utils/url";
import { api_locationDecoding, api_weather } from "../utils/apikey";

const GET_WEATHER = (latitude, longitude) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(
        `${url_weather}weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${api_weather}`
      )
      .then(
        (result) => {
          resolve(result.data);
          console.log(result.data);
        },
        (err) => {
          reject(err);
        }
      );
  });
  return promise;
};

const GET_LOC_DEC = (latitude, longitude) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(
        `${url_loc_dec}key=${api_locationDecoding}&lat=${latitude}&lon=${longitude}&format=json`
      )
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      });
  });
  return promise;
};

export { GET_WEATHER, GET_LOC_DEC };
