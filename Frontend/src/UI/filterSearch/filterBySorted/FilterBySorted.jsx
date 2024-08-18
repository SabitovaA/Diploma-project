import React from "react";
import "./FilterBySorted.scss";

function FilterBySorted() {
  return (
    <div className="sorted__container">
      <p>Sorted</p>
      <select className="sorted">
        <option className="sorted__option" value="by default">
          by default
        </option>
        <option className="sorted__option" value="newest">
          newest
        </option>
        <option className="sorted__option" value="price: high-low">
          price: high-low
        </option>
        <option className="sorted__option" value="price: low-high">
          price: low-high
        </option>
        <option className="sorted__option" value="alphabet: A-Z">
          alphabet: A-Z
        </option>
        <option className="sorted__option" value="alphabet: Z-A">
          alphabet: Z-A
        </option>
      </select>
    </div>
  );
}

export default FilterBySorted;
