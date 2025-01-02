import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { userCartContext } from "../context/cartContext";

const Cart = () => {
  const { total_items } = userCartContext();
  return (
    <div className="mobile">
      <Link to={"/cart_item"} className="cart_trolly">
        <LuShoppingCart />
        <span className="cart_total">{total_items}</span>
      </Link>
    </div>
  );
};

export default Cart;
