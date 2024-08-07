import React from "react";
import "./Burger.scss";
import Nav from "./Nav";

function Burger({ isToggle, setIsToggle }) {
  return (
    <div className="container__burger">
      <div
        onClick={() => setIsToggle(!isToggle)}
        className={isToggle ? "burger active" : "burger"}
      >
        <span className="span"></span>
      </div>

      <Nav isToggle={isToggle} />
    </div>
  );
}

export default Burger;
