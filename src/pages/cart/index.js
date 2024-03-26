import React, { useContext } from "react";
import { ProductsContext } from "../../component/productContext";
import NavBar from '../../component/navBarMenu';

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteItemFromCart
  } = useContext(ProductsContext);

  return (
    <div>
       <div className='home-navbar'>
          <NavBar />
        </div>
      {cartItems &&
        cartItems.map(({ id, name, price, image, count }) => {
          if (count !== 0) {
            return (
              <li key={id} className="cart">
                <h4>{name}</h4>
                <p>{price}</p>
                <img src={image} alt={name} />
                <button onClick={() => addToCart(id)}>+</button>
                <button onClick={() => removeFromCart(id)}>-</button>
                <button onClick={() => deleteItemFromCart(id)}>Remove</button>
              </li>
            );
          }
          return null;
        })}
    </div>
  );
};
export default Cart;
