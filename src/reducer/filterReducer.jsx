const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_DATA":
      // to get maxPrice
      const priceArr = action.payload.map((currData) => {
        return currData.price;
      });

      const maxPrice = Math.max(...priceArr);
      // console.log(maxPrice);
      return {
        ...state,
        filter_data: [...action.payload], //use [] in case of copy data
        all_data: [...action.payload], //use [] in case of copy data
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          price: maxPrice,
        },
      };

    case "SET_GRID":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST":
      return {
        ...state,
        grid_view: false,
      };

    case "SORT_VALUE": // firstly get the value
      return {
        ...state,
        sort_value: action.payload,
      };

    case "SORTING_PRODUCT": // sort product by using sort_value
      const { filter_data, sort_value } = state;

      const sortFunc = (a, b) => {
        if (sort_value === "lowest") {
          return a.price - b.price;
        }
        if (sort_value === "highest") {
          return b.price - a.price;
        }
        if (sort_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sort_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      const sortedData = [...filter_data].sort(sortFunc);
      return {
        ...state,
        filter_data: sortedData,
      };

    // setCategory
    case "SET_FILTER":
      const { value, name } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "UPDATE_FILTER":
      const { all_data } = state;
      let allData = [...all_data];

      const { category, company, colors, text, price } = state.filters;

      if (text) {
        allData = all_data.filter((currTxt) => {
          return currTxt.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        allData = allData.filter((currData) => {
          return currData.category === category;
        });
      }

      if (company !== "all") {
        allData = allData.filter((currData) => {
          return currData.company.toLowerCase() === company.toLowerCase();
        });
      }
      if (colors !== "all") {
        allData = allData.filter((currData) => {
          return currData.colors.includes(colors);
        });
      }

      if (price === 0) {
        allData = allData.filter((currData) => {
          return currData.price === price;
        });
      } else {
        allData = allData.filter((currData) => {
          return currData.price <= price;
        });
      }

      return {
        ...state,
        filter_data: allData,
      };

    // clear data
    case "CLEAR_DATA":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          colors: "all",
          price: state.filters.maxPrice,
          maxPrice: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
