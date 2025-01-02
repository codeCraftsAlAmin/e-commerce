import { createContext, useContext, useEffect, useReducer } from "react";
import { userProducts } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_data: [],
  all_data: [],
  grid_view: true,
  sort_value: "highest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    colors: "all",
    price: 0,
    maxPrice: 0,
    minPrice: 0,
  },
};

const FilterProvider = ({ children }) => {
  const { products } = userProducts();
  // console.log(products);

  const [state, dispatch] = useReducer(reducer, initialState);

  // gridView & listView
  const setGridView = () => {
    dispatch({ type: "SET_GRID" });
  };
  const setListView = () => {
    dispatch({ type: "SET_LIST" });
  };

  // sortingValue
  const sortingProdcut = (e) => {
    const currentValue = e.target.value;
    dispatch({ type: "SORT_VALUE", payload: currentValue });
  };

  // upadteCategory
  const updateFilter = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    dispatch({ type: "SET_FILTER", payload: { value, name } });
  };

  // clearPorduct
  const clearProduct = () => {
    dispatch({ type: "CLEAR_DATA" });
  };

  // to sort value
  useEffect(() => {
    dispatch({ type: "UPDATE_FILTER" });
    dispatch({ type: "SORTING_PRODUCT" });
  }, [state.sort_value, state.filters]); //rember to render sort_value

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_DATA", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sortingProdcut,
        updateFilter,
        clearProduct,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const userFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, userFilterContext };
