const toFahrenheit = (fahrenheit) => {
  let degree = 0.0;
  degree = Math.round((9 / 5) * fahrenheit + 32);
  return degree + " °F";
};

export default toFahrenheit;
