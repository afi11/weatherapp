const toCelcius = (fahrenheit) => {
  let degree = 0.0;
  degree = Math.round((5 / 9) * (fahrenheit - 32));
  return degree+" °C";
};

export default toCelcius;
