import React from "react";
import "../style/Dish.css";

const Dish = ({ name, dishImg, dishClass }) => {
  return (
    <div className={dishClass}>
      <h2 className="dish-name">{name}</h2>
      <img src={dishImg} className="dish-img" alt="" />
    </div>
  );
};

export default Dish;
