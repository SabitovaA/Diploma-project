import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/headerImages/logo.svg";
import heard from "../../assets/headerImages/heard.svg";
import cart from "../../assets/headerImages/cart.svg";
import sun from "../../assets/headerImages/sun.svg";
import moon from "../../assets/headerImages/moon.svg";
import Nav from "./Nav";
import Burger from "./Burger";

function Header() {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="content">
          <div className="navbar__logo">
            <img className="logo" src={logo} alt="" />
            <label className="switch">
              <input className="switch__input" type="chekbox" />
              <span className="switch__slider"></span>
              <img className="sun" src={sun} alt="" />
              <img className="moon" src={moon} alt="" />
            </label>
          </div>

          <div className="navbar__list">
            <Burger isToggle={isToggle} setIsToggle={setIsToggle} />
            <div className="discount">1 day discount!</div>
            <Nav isToggle={isToggle} />
          </div>

          <div className="navbar__cart">
            <img className="heard" src={heard} alt="" />
            <img className="cart" src={cart} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
