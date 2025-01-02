import React from "react";
import FormatePrice from "../helper/FormatePrice";
import { FaRegTrashCan } from "react-icons/fa6";
import { userCartContext } from "../context/cartContext";
import Amount from "./Amount";

const CartStore = (currElem) => {
  const { deleteProduct, setIncreament, setDecreament } = userCartContext();

  const { name, price, amount, color, image, id } = currElem;

  return (
    <tr>
      <td>
        <div className="item_div">
          <figure>
            <img src={image} alt="image" />
          </figure>
          <div>
            <p>{name}</p>
            <p className="col_p">
              color:
              <button style={{ backgroundColor: color, color: color }}>
                {/* {color} */}
              </button>
            </p>
          </div>
        </div>
      </td>
      <td>
        <p>
          <FormatePrice price={price} />
        </p>
      </td>
      <td className="quan_cell">
        <div>
          <Amount
            amount={amount}
            setIcrease={() => setIncreament(id)}
            setDcrease={() => setDecreament(id)}
          />
        </div>
      </td>
      <td>
        <p>
          <FormatePrice price={price * amount} />
        </p>
      </td>

      <td>
        <button className="trash" onClick={() => deleteProduct(id)}>
          <FaRegTrashCan />
        </button>
      </td>
    </tr>
  );
};

export default CartStore;
