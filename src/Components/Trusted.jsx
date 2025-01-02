import React from "react";
import { Link } from "react-router-dom";

const Trusted = () => {
  return (
    <div className="trust_content">
      {/* text */}
      <div>
        <h3>Trusted By 1000+ Companies</h3>
      </div>
      {/* images */}
      <div className="trust_img">
        <div>
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
            alt=""
          />
        </div>
      </div>
      {/* get start */}
      <div className="get_text">
        <div>
          <p>Ready to get started?</p>
          <p>Talk to us today</p>
        </div>
        <div>
          <Link className="btn" to={"/contact"}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
