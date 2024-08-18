import React from "react";
import { NavLink } from "react-router-dom";
import "./ComponentsName.scss";

function ComponentsName({ pageTitle, pathLink, btnText }) {
  return (
    <div className="blok__title_btn">
      <h2>{pageTitle}</h2>
      {/* <div className="box"> */}
      <div className="line"></div>
      <NavLink className="btn" to={pathLink}>
        {btnText}
      </NavLink>
      {/* </div> */}
    </div>
  );
}

export default ComponentsName;
