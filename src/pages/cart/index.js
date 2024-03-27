import React, { useContext, useState } from "react";
import { ProductsContext } from "../../component/productContext";
import NavBar from '../../component/navBarMenu';
import Table from "../../html-components/table";
import './index.scss'
import Invoice from "../invoice";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteItemFromCart
  } = useContext(ProductsContext);
  const [invoice, setInvoice] =useState(false);

  const openInvoice = () => {
    setInvoice(!invoice)
  }

  return (
    <div>
      <div className='home-navbar'>
        <NavBar />
      </div>
      <div className="cart">
        <div className="cart-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map(({ id, name, price, image, count }) => {
                  if (count !== 0) {
                    const total = count * price;
                    return (
                      <tr key={id}>
                        <td><img src={image} alt={name} /></td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>
                          <button onClick={() => addToCart(id)}>+</button>
                          <button>{count}</button>
                          <button onClick={() => removeFromCart(id)}>-</button>
                          <button onClick={() => deleteItemFromCart(id)}>Remove</button>
                        </td>
                        <td>
                          {total}
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
            </tbody>
          </table>
          <div>
            <button onClick={openInvoice} className="cart-invoice-btn">
              Invoice Bill
            </button>
          </div>
          {
            invoice && <Invoice  />
          }
        </div>
      </div>
    </div>
  );
};
export default Cart;
