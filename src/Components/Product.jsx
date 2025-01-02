import React from "react";
import FormatePrice from "../helper/FormatePrice";
import { Link } from "react-router-dom";

const Product = (singlePro) => {
  const { id, image, name, price, category } = singlePro;
  return (
    <Link to={`/singleProduct/${id}`} className="single_product">
      <div className="sub_product">
        <p>{category}</p>
        <img src={image} alt="" />
      </div>
      <div className="price_tag">
        <p>{name}</p>
        <p>
          <FormatePrice price={price} />
        </p>
      </div>
    </Link>
  );
};

export default Product;
// remember to add id in index route
