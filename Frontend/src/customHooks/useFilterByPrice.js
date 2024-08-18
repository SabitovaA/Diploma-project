import { useState, useLayoutEffect } from "react";

export const useFilterByPrice = (productList) => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const filterByMin = (e) => {
    setPriceFrom(e.target.value);
  };

  const filterByMax = (e) => {
    setPriceTo(e.target.value);
  };

  useLayoutEffect(() => {
    let minPrice = +priceFrom || 0;
    let maxPrice = +priceTo || Infinity;

    if (minPrice > maxPrice) {
      maxPrice = Infinity;
    }

    setFilteredList(
      productList
        ? productList.filter((item) => {
            if (item.price < maxPrice && item.price > minPrice) {
              return true;
            }
            return false;
          })
        : productList
    );
  }, [productList, priceFrom, priceTo]);

  return { priceFrom, priceTo, filterByMin, filterByMax, filteredList };
};
