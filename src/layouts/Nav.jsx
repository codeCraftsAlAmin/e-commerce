import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [isVisiable, setIsVisiable] = useState(false);

  const toggleSidebar = () => {
    setIsVisiable(!isVisiable);
  };

  return (
    <nav>
      {/* nav for small devices */}
      <ul className={`sidebar ${isVisiable ? "active" : "null"}`}>
        <li onClick={toggleSidebar}>
          <Link className="nav_link">
            <IoMdClose className="menu_bar" />
          </Link>
        </li>
        <li>
          <Link className="nav_link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="nav_link" to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="nav_link" to={"/contact"}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="nav_link" to={"/products"}>
            Products
          </Link>
        </li>
        <li>
          <Link className="nav_link" to={"/cart_item"}>
            Cart
          </Link>
        </li>
      </ul>

      {/* for large devices */}
      <ul>
        <li className="mobile">
          <Link className="nav_link" to={"/"}>
            Home
          </Link>
        </li>
        <li className="mobile">
          <Link className="nav_link" to={"/about"}>
            About
          </Link>
        </li>
        <li className="mobile">
          <Link className="nav_link" to={"/contact"}>
            Contact
          </Link>
        </li>
        <li className="mobile">
          <Link className="nav_link" to={"/products"}>
            Products
          </Link>
        </li>
        <li onClick={toggleSidebar} className="menu_btn">
          <Link className="nav_link">
            <IoMdMenu className="menu_bar three_dot" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
