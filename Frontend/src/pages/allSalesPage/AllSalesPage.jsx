import React from "react";
import { NavLink } from "react-router-dom";
import { useGetProductsAllQuery } from "../../api/productApi";
import { BASE_URL } from "../../api/baseUrl";
import "./AllSalesPage.scss";
import heardWhite from "../../assets/headerImages/heardWhite.svg";
import cartWhite from "../../assets/headerImages/cartWhite.svg";

let filteredProducts = [];

function AllSalesPage() {
  const { data } = useGetProductsAllQuery();
  if (data) {
    filteredProducts = data.filter((item) => item.discont_price);
  }
  return (
    <div className="products__container">
      <div className="links">
        <NavLink className="link">Main Page</NavLink>
        <div className="feature"></div>
        <NavLink className="link">All sales</NavLink>
      </div>
      <h2>All Products</h2>
      <div className="sort__container">
        <div className="price__box">
          <p>Price</p>
          <input className="price" placeholder="from" type="text" />
          <input className="price" placeholder="to" type="text" />
        </div>
        <div className="discount__box">
          <p>Discout items</p>
          <input className="discount" type="text" />
        </div>
        <div className="sorted">
          <p>Sorted</p>
          <input className="sorted" type="text" placeholder="by default" />
        </div>
      </div>
      <div className="products">
        {filteredProducts &&
          filteredProducts.map((product) => (
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

export default AllSalesPage;
