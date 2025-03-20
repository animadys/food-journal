import React, { useState } from "react";
import Dish from "./Dish.jsx";
import dishes from "./Dishes";
import "../style/DishRandomize.css";

const DishRandomize = () => {
  const [randomDish, setRandomDish] = useState(dishes[0]);

  const onClickRandom = () => {
    const index = Math.floor(Math.random() * dishes.length);
    setRandomDish(dishes[index]);
  };

  return (
    <div className="main-dish">
      <Dish
        name={randomDish.name}
        dishImg={randomDish.img}
        dishClass="dish-card"
      />
      <button onClick={onClickRandom} className="randomize">
        Random
      </button>
    </div>
  );
};

export default DishRandomize;
