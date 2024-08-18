import React from "react";
import "./FilterByDiscount.scss";

function FilterByDiscount({ ...props }) {
  return (
    <label className="discount__box">
      <input {...props} className="checkbox" type="checkbox" />
      Discout items
      <span className="fake__checkbox"></span>
    </label>
  );
}

export default FilterByDiscount;
