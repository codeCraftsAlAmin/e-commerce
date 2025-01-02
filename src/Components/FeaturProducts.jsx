import React from "react";
import { userProducts } from "../context/productContext";
import Product from "./Product";

const FeaturProducts = () => {
  const { isLoading, featuresProducts } = userProducts();
  // console.log(featuresProducts);
  if (isLoading) {
    return (
      <div className="featur_content">
        <h2>Data is loading...</h2>
      </div>
    );
  }
  return (
    <div className="featur_content">
      <div className="featu_text">
        <p>check now</p>
        <h3>our feature services</h3>
      </div>
      <div className="featu_pro">
        {featuresProducts &&
          featuresProducts.map((singlePro) => {
            return <Product key={singlePro.id} {...singlePro} />;
          })}
      </div>
    </div>
  );
};

export default FeaturProducts;
