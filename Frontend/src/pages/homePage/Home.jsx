import React from "react";
import "./Home.scss";
import PromoBanner from "../../components/homeComponents/promoBanner/PromoBanner";
import HomeCategories from "../../components/homeComponents/homeCategories/HomeCategories";
import HomeSale from "../../components/homeComponents/homeSale/HomeSale";
import Discount from "../../components/homeComponents/discount/Discount";

function Home() {
  return (
    <>
      <PromoBanner />
      <HomeCategories />
      <Discount />
      <HomeSale />
    </>
  );
}

export default Home;
