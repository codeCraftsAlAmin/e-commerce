import React from "react";
import FilterSection from "../Components/FilterSection";
import Sorts from "../Components/Sorts";
import ProductList from "../Components/ProductList";

const Products = () => {
  return (
    <div className="products">
      <div className="products_view">
        {/* filter section */}
        <div className="filter_sec">
          <FilterSection />
        </div>

        {/* main content */}
        <div>
          <div className="main_content">
            <Sorts />
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
