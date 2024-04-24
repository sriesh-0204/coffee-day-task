import React, { useContext, useState } from "react";
import { ProductsContext } from "../../component/productContext";
import NavBar from '../../component/navBarMenu';
import './index.scss'
import Invoice from "../invoice";
import { Images } from "../../assets/images";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteItemFromCart
  } = useContext(ProductsContext);
  const [invoice, setInvoice] = useState(false);

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
          {cartItems.length > 0 ? (
            <>
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
                    cartItems.map(({ id, name, price, image, count = 1 }) => {
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
                  Generate Invoice
                </button>
              </div>
              {
                invoice && <Invoice closeIcon={openInvoice} />
              }
            </>
          ) : (
            <div className="cart-no-data">
              <img src={Images.NoCartData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
