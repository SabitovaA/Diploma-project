import React from "react";
import "./HomeCategories.scss";
import ComponentsName from "../../../UI/reused/componentsName/ComponentsName";
import CategoriesCart from "../../../UI/categoriesCart/CategoriesCart";
import { useGetCategoriesAllQuery } from "../../../api/productApi";

let categories = [];

function HomeCategories() {
  const { data } = useGetCategoriesAllQuery();

  if (data) {
    categories = data.slice(0, 4);
  }

  return (
    <div className="home__categories_container">
      <ComponentsName
        pageTitle="Categories"
        pathLink="categories"
        btnText="All categories"
      />
      <CategoriesCart
        array={categories}
        classNameContainerCategories="categories__container"
        classNameImg="categorie__img"
      />
    </div>
  );
}

export default HomeCategories;
