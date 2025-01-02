import React from "react";
import { Link } from "react-router-dom";

const PageNavigation = ({ title }) => {
  // console.log(title);
  return (
    <div className="current_product">
      <Link to={"/about"} className="home_route">
        About/
      </Link>
      <h2>{title}</h2>
    </div>
  );
};

export default PageNavigation;
