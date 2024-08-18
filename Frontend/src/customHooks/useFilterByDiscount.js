import { useState, useLayoutEffect } from "react";

export const useFilterByDiscount = (list, filterProps) => {
  const [filteredList, setFilteredList] = useState(list);
  const [filterValue, setFilterValue] = useState(false);

  const onFilter = () => setFilterValue((prevState) => !prevState);

  useLayoutEffect(() => {
    filterValue
      ? setFilteredList(
          filteredList && filteredList.filter((product) => product[filterProps])
        )
      : setFilteredList(list);
  }, [list, filterValue]);

  return { onFilter, filteredList, filterValue };
};
