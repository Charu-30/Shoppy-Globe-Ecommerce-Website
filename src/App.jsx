import { Provider } from "react-redux";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import React from "react";
import { Outlet } from "react-router-dom";
import store from "./utils/store";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Outlet/>
      <Footer/>
    </Provider>
  )
}

export default App;
