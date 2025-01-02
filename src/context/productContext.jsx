import axios from "axios";
import { useContext, createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
const Api = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuresProducts: [],
  singleData: {},
  isSingleLoading: false,
  isSingleError: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // get all data
  const getProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: "GET_PRODUCTS", payload: products });
      // console.log(products);
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };

  // single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleData = res.data;
      dispatch({ type: "GET_SINGLE_DATA", payload: singleData });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProduct(Api);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const userProducts = () => {
  return useContext(AppContext);
};

export { AppProvider, userProducts, AppContext };
