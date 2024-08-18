import React from "react";
import { NavLink } from "react-router-dom";
import { useGetProductsAllQuery } from "../../api/productApi";
import { BASE_URL } from "../../api/baseUrl";
import "./AllProductsPage.scss";
import heardWhite from "../../assets/headerImages/heardWhite.svg";
import cartWhite from "../../assets/headerImages/cartWhite.svg";
import FilterByDiscount from "../../UI/filterSearch/filterByDiscount/FilterByDiscount";
import FilterByPrice from "../../UI/filterSearch/filterByPrice/FilterByPrice";
import FilterBySorted from "../../UI/filterSearch/filterBySorted/FilterBySorted";
import { useFilterByDiscount } from "../../customHooks/useFilterByDiscount";
import { useFilterByPrice } from "../../customHooks/useFilterByPrice";

function AllProductsPage() {
  const { data } = useGetProductsAllQuery();
  const {
    onFilter,
    filterValue,
    filteredList: filteredListByDiscout,
  } = useFilterByDiscount(data, "discont_price");

  const { filterByMax, filterByMin, priceFrom, priceTo, filteredList } =
    useFilterByPrice(filteredListByDiscout);

  return (
    <div className="products__container">
      <div className="links">
        <NavLink className="link">Main Page</NavLink>
        <div className="feature"></div>
        <NavLink className="link">All products</NavLink>
      </div>
      <h2>All Products</h2>
      <div className="sort__container">
        <FilterByPrice
          priceFrom={priceFrom}
          priceTo={priceTo}
          filterByMax={filterByMax}
          filterByMin={filterByMin}
        />
        <FilterByDiscount checked={filterValue} onChange={onFilter} />
        <FilterBySorted />
      </div>
      <div className="products">
        {filteredList &&
          filteredList.map((product) => (
            <div className="product__box" key={product.id}>
              <img src={BASE_URL + product.image} alt="" />
              <div className="sale">{`- ${Math.ceil(
                100 - product.discont_price / (product.price / 100)
              )} %`}</div>
              <div className="icons__container">
                <img className="icon" src={heardWhite} alt="" />
                <img className="icon" src={cartWhite} alt="" />
              </div>

              <div className="title__box">
                <p className="title">{product.title}</p>
                <div className="price__box">
                  <p className="price">${product.price}</p>
                  <p className="discount__price">${product.discont_price}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AllProductsPage;
