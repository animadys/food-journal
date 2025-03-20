import React from "react";
import dishes from "./Dishes";
import Dish from "./Dish";
import "../style/DishList.css";

const DishList = () => {
  return (
    <div className="dish-list-container">
      <div className="dish-list">
        {dishes.map((dish) => (
          <Dish
            name={dish.name}
            dishImg={dish.img}
            dishClass="dish-card-small"
            key={dish.id}
          />
        ))}
      </div>
    </div>
  );
};

export default DishList;
