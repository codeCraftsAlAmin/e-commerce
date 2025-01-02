import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import Amount from "./Amount";
import { userCartContext } from "../context/cartContext";

const AddToCart = ({ product }) => {
  const { colors, stock, id } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  // cart context
  const { addToCart } = userCartContext();

  // increament & decreament
  const setIcrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const setDcrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  // console.log(singleData);
  return (
    <div className="cart_sec">
      {/* colorSection */}
      <div className="product_colors">
        <p>Colors: </p>
        {colors &&
          colors.map((currColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: currColor }}
                className={
                  color === currColor ? "color_btn active" : "color_btn"
                }
                onClick={() => setColor(currColor)}
              >
                {color === currColor ? <FaCheck className="check" /> : null}
              </button>
            );
          })}
      </div>

      <div>
        <Amount
          amount={amount}
          setIcrease={setIcrease}
          setDcrease={setDcrease}
        />
      </div>
      {/* addButton */}
      <Link
        to={"/cart_item"}
        className="cart_btn"
        onClick={() => addToCart(product, color, amount, id)}
      >
        add to cart
      </Link>
    </div>
  );
};

export default AddToCart;
