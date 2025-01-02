import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Header from "../layouts/Header";
import Contact from "../Components/Contact";
import Footer from "../layouts/Footer";
import About from "../pages/About";
import SingleProduct from "../Components/SingleProduct";
import CartItem from "../Components/CartItem";
import Products from "../pages/Products";

const Index = () => {
  return (
    <div className="app_container">
      <BrowserRouter>
        <Header />
        <main className="content">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/cart_item"} element={<CartItem />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/products"} element={<Products />} />
            <Route path={"/singleProduct/:id"} element={<SingleProduct />} />
            <Route path={"*"} element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Index;
