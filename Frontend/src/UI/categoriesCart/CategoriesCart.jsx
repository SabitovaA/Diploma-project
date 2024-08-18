import React from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../../api/baseUrl";
import "./CategoriesCart.scss";

function CategoriesCart({ classNameImg, classNameContainerCategories, array }) {
  return (
    <div className={classNameContainerCategories}>
      {array &&
        array.map((category) => (
          <NavLink key={category.id} className="categories__container_box">
            <div
              className={classNameImg}
              style={{ backgroundImage: `url(${BASE_URL + category.image})` }}
            >
              {" "}
            </div>
            <p>{category.title}</p>
          </NavLink>
        ))}
    </div>
  );
}

export default CategoriesCart;
