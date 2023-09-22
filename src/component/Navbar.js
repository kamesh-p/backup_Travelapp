import React, { useState } from "react";
import "./Navbar.css";
import { Meanitem } from "./menuItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <nav className="Navbar-item">
      <h1 className="navbar-logo">trip</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {Meanitem.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}>{item.title}</i>
              </Link>
            </li>
          );
        })}
        <button className="button">signup</button>
      </ul>
    </nav>
  );
};

export default Navbar;
