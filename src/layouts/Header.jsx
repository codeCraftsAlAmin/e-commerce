import React from "react";
import Nav from "./Nav";
import Cart from "./Cart";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="nav_container">
      <Logo />
      <Nav />
      <Cart />
    </div>
  );
};

export default Header;
