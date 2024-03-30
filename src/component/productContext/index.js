import React, { createContext, useState } from "react";
import { products } from "../../data/constant";

export const ProductsContext = createContext(products);

const ProductsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    const myCartItems = [...cartItems];
    const product = products.find((item) => item.id === id);
    const isAvailable = myCartItems.some((item) => item.id === id);

    if (isAvailable) {
      const product = myCartItems.find((item) => item.id === id);
      product.count += 1;
    } else {
      const newProduct = { ...product, count: 1 };
            myCartItems.push(newProduct);
    }
    setCartItems([...myCartItems]);
  };

  const removeFromCart = (id) => {
    const myCartItems = [...cartItems];
    const product = myCartItems.find((item) => item.id === id);
    product.count -= 1;
    setCartItems([...myCartItems]);
  };

  const deleteItemFromCart = (id) => {
    const filteredItem = cartItems.filter((product) => product.id !== id);
    setCartItems([...filteredItem]);
  };

  const initialState = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    deleteItemFromCart
  };

  return (
    <ProductsContext.Provider value={initialState}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
