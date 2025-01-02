import React from "react";
import CartStore from "./CartStore";
import { userCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import FormatePrice from "../helper/FormatePrice";

const CartItem = () => {
  const { cart, clearCart, subtotal_price, shipping_fee } = userCartContext();
  // console.log(shipping_fee);

  if (cart.length === 0) {
    return <h3 className="cart_table">No data in the cart</h3>;
  }
  return (
    <div className="cart_table">
      {/* cart table */}
      <table>
        <thead>
          <tr>
            <th className="item_th">item</th>
            <th>price</th>
            <th className="quan_th">qunatity</th>
            <th className="sub_mob">subtotal</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((currElem, index) => {
              return <CartStore key={index} {...currElem} />;
            })}
        </tbody>
      </table>

      {/* cart buttons */}
      <div className="shopping_btn">
        <div>
          <Link to={"/products"} className="shoping_link">
            Continue Shoping
          </Link>
        </div>
        <div>
          <button onClick={clearCart} className="clear_cart">
            Clear Cart
          </button>
        </div>
      </div>

      {/* subtotal */}
      <div className="subtotal_cart">
        <h3>
          subtoal:
          <span>
            <FormatePrice price={subtotal_price} />
          </span>
        </h3>
        <h3>
          shipping fee: <FormatePrice price={shipping_fee} />
        </h3>
        <h3>
          <hr />
          order total: <FormatePrice price={subtotal_price + shipping_fee} />
        </h3>
      </div>
    </div>
  );
};

export default CartItem;
