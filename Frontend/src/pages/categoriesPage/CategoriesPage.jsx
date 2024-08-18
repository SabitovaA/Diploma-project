import React from "react";
import CategoriesCart from "../../UI/categoriesCart/CategoriesCart";
import { useGetCategoriesAllQuery } from "../../api/productApi";
import "./CategoriesPage.scss";

let categories = [];

function CategoriesPage() {
  const { data } = useGetCategoriesAllQuery();
  console.log(data);

  return (
    <div className="categories__page">
      <CategoriesCart
        array={data}
        classNameContainerCategories="categories__container"
        classNameImg="categorie__img"
      />
    </div>
  );
}

export default CategoriesPage;
