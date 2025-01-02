import React from "react";
import Product from "./Product";

const GridView = ({ product }) => {
  //   console.log(product);
  return (
    <div className="grid_view">
      <div className="grid_col">
        {product &&
          product.map((currentPorduct) => {
            return <Product key={currentPorduct.id} {...currentPorduct} />;
          })}
      </div>
    </div>
  );
};

export default GridView;
