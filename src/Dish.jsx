import React from "react";
import "./Dish.css";

const Dish = ({ name, dishImg }) => {
  return (
    <div className="dish-card">
      <h2 className="dish-name">{name}</h2>
      <img src={dishImg} className="dish-img" alt="" />
    </div>
  );
};

export default Dish;
