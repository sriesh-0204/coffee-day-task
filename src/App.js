import React from "react";
import "./App.css";
import RouteList from "./router";
import ProductsProvider from "./component/productContext";

function App() {
  return (
    <ProductsProvider>
      <RouteList />
    </ProductsProvider>
  );
}

export default App;
