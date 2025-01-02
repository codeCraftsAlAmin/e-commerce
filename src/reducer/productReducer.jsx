const ProductReducer = (state, action) => {
  switch (action.type) {
    // get products
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_PRODUCTS":
      const featursData = action.payload.filter((curntElem) => {
        return curntElem.featured === true;
      });
      return {
        ...state,
        products: action.payload,
        featuresProducts: featursData,
        isLoading: false,
      };

    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // single data
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "GET_SINGLE_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleData: action.payload,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleError: true,
      };

    default:
      return state;
  }
};
export default ProductReducer;
