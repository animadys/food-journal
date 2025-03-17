import React, { useState } from "react";
import "./App.css";
import Dish from "./Dish.jsx";

const App = () => {
  const dishes = [
    {
      name: "Фунчоза",
      img: "/noodles.jpg",
    },
    {
      name: "Отбивные с грибами",
      img: "/meat.jpg",
    },
    {
      name: "Брокколи с курицей",
      img: "/broccoli.jpg",
    },
    {
      name: 'Салат "Цезарь"',
      img: "/caesar.jpg",
    },
    {
      name: "Энчилады по-мексикански",
      img: "/enchilada.jpg",
    },
    {
      name: "Салат с курицей и ананасом",
      img: "/pineapple-salad.jpg",
    },
    {
      name: "Творожные вафли",
      img: "/waffles.jpg",
    },
    {
      name: "Куриные крылышки в соусе барбекю",
      img: "/wings.jpg",
    },
  ];

  const [randomDish, setRandomDish] = useState(dishes[0]);

  const onClickRandom = () => {
    const index = Math.floor(Math.random() * dishes.length);
    setRandomDish(dishes[index]);
  };

  return (
    <>
      <h1>Food Journal</h1>
      <Dish name={randomDish.name} dishImg={randomDish.img} />
      <button onClick={onClickRandom} className="randomize">
        Random
      </button>
    </>
  );
};

export default App;

/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
