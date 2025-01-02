import React from "react";
import { userFilterContext } from "../context/filterContext";
import { FaCheck } from "react-icons/fa6";
import FormatePrice from "../helper/FormatePrice";

const FilterSection = () => {
  const {
    filters: { text, colors, price, minPrice, maxPrice },
    all_data,
    updateFilter,
    clearProduct,
  } = userFilterContext();
  // console.log(all_data);

  const getUniqueData = (data, proparty) => {
    let newValue = data.map((currData) => {
      return currData[proparty];
    });
    if (proparty === "colors") {
      newValue = newValue.flat();
    }
    return (newValue = ["all", ...new Set(newValue)]);
  };

  const onlyCategoryData = getUniqueData(all_data, "category");
  const onlyCompanyData = getUniqueData(all_data, "company");
  const onlyColorsData = getUniqueData(all_data, "colors");
  // console.log(onlyColorsData);

  return (
    <div className="filter_dashboard">
      <div className="dashboard">
        {/* input section */}
        <form
          action="#"
          className="filter_input"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="search"
            name="text"
            value={text}
            onChange={updateFilter}
          />
        </form>

        {/* category section */}
        <div className="filter_category">
          <h3>Category</h3>
          {onlyCategoryData &&
            onlyCategoryData.map((currData, index) => {
              return (
                <button
                  key={index}
                  value={currData}
                  onClick={updateFilter}
                  name="category"
                  className="ctg_btn"
                >
                  {currData}
                </button>
              );
            })}
        </div>

        {/* company section */}
        <form className="company">
          <select name="company" onClick={updateFilter}>
            {onlyCompanyData &&
              onlyCompanyData.map((currData, index) => {
                return (
                  <option key={index} value={currData}>
                    {currData}
                  </option>
                );
              })}
          </select>
        </form>

        {/* colors section */}
        <div className="colors">
          {onlyColorsData &&
            onlyColorsData.map((currColor, index) => {
              if (currColor === "all") {
                return (
                  <button
                    key={index}
                    name="colors"
                    value={currColor}
                    onClick={updateFilter}
                    // style={{ backgroundColor: currColor }}
                    type="button"
                    className="color_btn active"
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  name="colors"
                  value={currColor}
                  onClick={updateFilter}
                  style={{ backgroundColor: currColor }}
                  type="button"
                  className={
                    colors === currColor ? "color_btn active" : "color_btn"
                  }
                >
                  {colors === currColor ? <FaCheck className="check" /> : null}
                </button>
              );
            })}
        </div>
        <div className="price">
          <h3>Price: </h3>
          <FormatePrice price={price} />
          <div>
            <input
              type="range"
              name="price"
              value={price}
              min={minPrice}
              max={maxPrice}
              onChange={updateFilter}
              className="range_input"
            />
          </div>
        </div>

        {/* clear button */}
        <div>
          <button onClick={clearProduct} className="clear_btn">
            clear products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
