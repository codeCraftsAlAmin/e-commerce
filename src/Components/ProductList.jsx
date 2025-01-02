import React from "react";
import { userFilterContext } from "../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { grid_view, filter_data } = userFilterContext();
  // console.log(filter_data);

  if (grid_view) {
    return <GridView product={filter_data} />;
  } else {
    return <ListView product={filter_data} />;
  }
};

export default ProductList;
