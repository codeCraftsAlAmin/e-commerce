import React from "react";
import Index from "./routers";
import { AppProvider } from "./context/productContext";
import { FilterProvider } from "./context/filterContext";
import { CartProvider } from "./context/cartContext";

const App = () => {
  return (
    <AppProvider>
      <FilterProvider>
        <CartProvider>
          <Index />
        </CartProvider>
      </FilterProvider>
    </AppProvider>
  );
};

export default App;
