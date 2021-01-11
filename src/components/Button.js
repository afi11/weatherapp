import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <div className="flex justify-center">
      <button
        className=" bg-green-600 hover:bg-green-400 text-white rounded focus:outline focus:shadow-outline py-2 px-4"
        onClick={onPress}
      >
        <i className="fas fa-map-marker-alt"></i> {title}
      </button>
    </div>
  );
};

export default Button;
