import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "../style/Navigation.css";
import DishRandomize from "./DishRandomize";
import DishList from "./DishList";
import Main from "./Main";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <nav className="nav__main">
        <ul className={["nav__list", isOpen ? "open" : ""].join(" ")}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsOpen(false)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/random"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsOpen(false)}
            >
              Рандом
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dishes"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsOpen(false)}
            >
              Список блюд
            </NavLink>
          </li>
        </ul>
        <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/random" element={<DishRandomize />} />
        <Route path="/dishes" element={<DishList />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
