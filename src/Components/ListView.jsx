import React from "react";
import Product from "./Product";

const ListView = ({ product }) => {
  return (
    <div className="list_view">
      <div className="list_col">
        {product &&
          product.map((singleProduct) => {
            return <Product key={singleProduct.id} {...singleProduct} />;
          })}
      </div>
    </div>
  );
};

export default ListView;
