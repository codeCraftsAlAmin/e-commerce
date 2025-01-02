import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_sec">
        <p>E-Commerce</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          reiciendis voluptates
        </p>
      </div>

      <div className="msg">
        <p>subscribe to get important update</p>
        <br />
        <input type="text" placeholder="your email" />
        <button className="msg_btn">Subscribe</button>
      </div>

      <div className="icons">
        <i>
          <FaGithub />
        </i>
        <i>
          <IoLogoInstagram />
        </i>
        <i>
          <FiYoutube />
        </i>
      </div>

      <div className="numbers">
        <p>call us</p>
        <br />
        <p>+997939030****</p>
      </div>
    </footer>
  );
};

export default Footer;