import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

// get local storage
const getLocalData = () => {
  const data = localStorage.getItem("cartData");
  try {
    return JSON.parse(data) || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const inititalState = {
  // cart: [],
  cart: getLocalData(),
  total_items: 0,
  subtotal_price: 0,
  shipping_fee: 10000,
};

const CartProvider = ({ children }) => {
  // reducer hook
  const [state, dispatch] = useReducer(reducer, inititalState);

  // add to cart
  const addToCart = (product, color, amount, id) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, color, amount, id } });
  };

  // delete product
  const deleteProduct = (id) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };

  // increament & decreament
  const setIncreament = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };
  const setDecreament = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  // clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // set local storage
  useEffect(() => {
    try {
      dispatch({ type: "GET_TOTAL_ITEM" });
      dispatch({ type: "GET_TOTAL_PRICE" });
      localStorage.setItem("cartData", JSON.stringify(state.cart));
    } catch (error) {
      console.log(error);
    }
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        deleteProduct,
        setIncreament,
        setDecreament,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const userCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, userCartContext };
