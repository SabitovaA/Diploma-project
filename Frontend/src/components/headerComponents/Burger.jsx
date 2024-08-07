import React, { useEffect, useState } from "react";
import menu from "../../assets/headerImages/menu.svg";

function Burger({ isToggle, setIsToggle }) {
  return (
    <>
      <img
        onClick={() => setIsToggle(!isToggle)}
        className="icon"
        src={menu}
        alt=""
      />
    </>
  );
}

export default Burger;
