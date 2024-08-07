import React from "react";

function Nav({ isToggle }) {
  return (
    <>
      <ul
        className={`navbar__list-link ${
          !isToggle ? "navbar__list-link-active" : ""
        }`}
      >
        <li href="" className="link">
          Main Page
        </li>
        <li href="" className="link">
          Categories
        </li>
        <li href="" className="link">
          All products
        </li>
        <li href="" className="link">
          All sales
        </li>
      </ul>
    </>
  );
}

export default Nav;
