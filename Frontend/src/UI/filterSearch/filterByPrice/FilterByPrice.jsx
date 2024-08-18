import React from "react";
import "./FilterByPrice.scss";

function FilterByPrice({ filterByMin, filterByMax, priceFrom, priceTo }) {
  return (
    <label className="price__box">
      Price
      <input
        className="price__input"
        placeholder="from"
        type="number"
        value={priceFrom}
        onChange={filterByMin}
      />
      <input
        className="price__input"
        placeholder="to"
        type="number"
        value={priceTo}
        onChange={filterByMax}
      />
    </label>
  );
}

export default FilterByPrice;
