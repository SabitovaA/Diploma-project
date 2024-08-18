import React from "react";
import ComponentsName from "../../../UI/reused/componentsName/ComponentsName";
import "./HomeSale.scss";
import { useGetProductsAllQuery } from "../../../api/productApi";
import { BASE_URL } from "../../../api/baseUrl";
import heardWhite from "../../../assets/headerImages/heardWhite.svg";
import cartWhite from "../../../assets/headerImages/cartWhite.svg";
import { NavLink } from "react-router-dom";

let filteredProducts = [];

function HomeSale() {
  const { data } = useGetProductsAllQuery();

  if (data) {
    filteredProducts = data.filter((item) => item.discont_price);
  }
  const saleProducts = filteredProducts.slice(0, 4);

  return (
    <div className="home__sale__container">
      <ComponentsName
        pageTitle="Sale"
        pathLink="allSales"
        btnText="All sales"
      />
      <div className="sale__container">
        {saleProducts &&
          saleProducts.map((sales) => (
            <NavLink
              to="productPage"
              className="sale__container_box"
              key={sales.id}
            >
              <img className="sales__img" src={BASE_URL + sales.image} alt="" />
              <div className="sale">{`- ${Math.ceil(
                100 - sales.discont_price / (sales.price / 100)
              )} %`}</div>
              <div className="icons__container">
                <img className="icon" src={heardWhite} alt="" />
                <img className="icon" src={cartWhite} alt="" />
              </div>

              <div className="title__box">
                <p className="title">{sales.title}</p>
                <div className="price__box">
                  <p className="price">${sales.price}</p>
                  <p className="discount__price">${sales.discont_price}</p>
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default HomeSale;
