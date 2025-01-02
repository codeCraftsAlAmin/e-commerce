const cartReducer = (state, action) => {
  switch (action.type) {
    // add to cart
    case "ADD_TO_CART":
      const { product, color, amount, id } = action.payload;

      // find out existing products
      const existingProduct = state.cart.find(
        (currElem) => currElem.id === id + color
      );
      // console.log(existingProduct);

      if (existingProduct) {
        let updatedCart = state.cart.map((currElem) => {
          if (currElem.id === id + color) {
            let newAmount = currElem.amount + amount;

            if (newAmount >= currElem.max) {
              newAmount = currElem.max;
            }
            return {
              ...currElem,
              amount: newAmount,
            };
          } else {
            return currElem;
          }
        });
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const cartProduct = {
          name: product.name,
          image: product.image[0].url,
          id: id + color,
          price: product.price,
          amount,
          color,
          max: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct], // to store id one after one
        };
      }

    // delete product
    case "DELETE_PRODUCT":
      const updateCart = state.cart.filter((data) => {
        return data.id !== action.payload;
      });
      return {
        ...state,
        cart: updateCart,
      };

    // increament & decreament
    case "SET_INCREASE":
      const increametnAmount = state.cart.map((currElem) => {
        if (currElem.id === action.payload) {
          let increAmount = currElem.amount + 1;

          if (increAmount >= currElem.max) {
            increAmount = currElem.max;
          }
          return {
            ...currElem,
            amount: increAmount,
          };
        } else {
          return currElem;
        }
      });
      return {
        ...state,
        cart: increametnAmount,
      };

    case "SET_DECREASE":
      const decreamentAmount = state.cart.map((currElem) => {
        if (currElem.id === action.payload) {
          let decreAmount = currElem.amount - 1;

          if (decreAmount <= 1) {
            decreAmount = 1;
          }
          return {
            ...currElem,
            amount: decreAmount,
          };
        } else {
          return currElem;
        }
      });
      return {
        ...state,
        cart: decreamentAmount,
      };

    // clear cart
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    // get total items
    case "GET_TOTAL_ITEM":
      const totalAmount = state.cart.map((currElem) => currElem.amount);
      const getAmount = totalAmount.reduce((x, y) => {
        return x + y;
      }, 0);

      return {
        ...state,
        total_items: getAmount,
      };

    // get total price
    case "GET_TOTAL_PRICE":
      const subotalPrice = state.cart.map(
        (currElem) => currElem.amount * currElem.price
      );
      const getTotalPrice = subotalPrice.reduce((x, y) => {
        return x + y;
      }, 0);
      return {
        ...state,
        subtotal_price: getTotalPrice,
      };

    default:
      return state;
  }
};

export default cartReducer;
