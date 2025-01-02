import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userProducts } from "../context/productContext";
import PageNavigation from "./PageNavigation";
import MyImages from "./MyImages";
import FormatePrice from "../helper/FormatePrice";

// productsIcons
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplaceFilled } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import AddToCart from "./AddToCart";

const Api = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, singleData, isSingleLoading } = userProducts();

  const {
    id: ajax,
    category,
    company,
    description,
    image,
    name,
    price,
    reviews,
    stars,
    stock,
  } = singleData;

  // console.log(singleData);
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${Api}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div className="single_loading">
        <h2>Data is loading...</h2>
      </div>
    );
  }

  return (
    <div className="single_product_display">
      <PageNavigation title={name} />

      <div className="product_container">
        {/* image_div */}
        <div className="product_image">
          <MyImages imgs={image} />
        </div>

        {/* container_div */}
        <div className="content_div">
          <div className="product_title">
            <h2>{name}</h2>
            <p>
              Rating: <span>{stars}</span>
            </p>
            <p>
              MRP:
              <del>
                <FormatePrice price={price + 50000} />
              </del>
            </p>
            <p className="deal">
              Deal of the day:
              <span>
                <FormatePrice price={price} />
              </span>
            </p>
            <p className="desc">{description}</p>
          </div>

          <div className="product_icon">
            <div className="product_item">
              <TbTruckDelivery className="item_icon" />
              <p>Free delivery</p>
            </div>
            <div className="product_item">
              <TbReplaceFilled className="item_icon" />
              <p>20 Days replacement</p>
            </div>
            <div className="product_item">
              <TbTruckDelivery className="item_icon" />
              <p>Trace deliverd</p>
            </div>
            <div className="product_item">
              <MdOutlineSecurity className="item_icon" />
              <p>2 years warrenty</p>
            </div>
          </div>

          <div className="product_stock">
            <p>
              Available: <span>{stock > 0 ? "In Stock" : "Out of Stock"}</span>
            </p>
            <p>
              ID: <span>{id}</span>
            </p>
            <p>
              Brand: <span>{company}</span>
            </p>
            <hr />
          </div>
          <div>{stock > 0 && <AddToCart product={singleData} />}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
