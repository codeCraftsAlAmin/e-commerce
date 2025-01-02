import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="content_sec">
      <div className="text">
        <div className="intro">
          <p>Welcome to</p>
          <h3>E-Commerce</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum
          asperiores quod sit velit quo impedit maxime provident repudiandae
          aliquid ipsam minima itaque, tenetur corporis ea inventore vero
          laborum facilis accusamus commodi
        </p>
        <div>
          <Link className="btn" to={"/products"}>
            Show Now
          </Link>
        </div>
      </div>

      <div className="img_sec">
        <div className="color"></div>
        <img src="/public/images/hero.jpg" alt="" />
      </div>
    </div>
  );
};

export default Content;
