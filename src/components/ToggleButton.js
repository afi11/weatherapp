import React from "react";

const ToggleButton = ({ option, toCelcius, toFahrenheit }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row">
        <button
          onClick={toFahrenheit}
          className="bg-green-500 hover:bg-green-700 py-1 px-3 rounded mr-2 text-white btn-fahrenheit"
        >
          ° F
        </button>
        <button
          onClick={toCelcius}
          className="bg-green-700 hover:bg-green-700 py-1 px-3 rounded text-white btn-celcius"
        >
          ° C
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
