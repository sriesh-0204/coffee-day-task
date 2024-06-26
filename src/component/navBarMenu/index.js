import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './index.scss';
import { ProductsContext } from '../productContext';
import { FaShoppingCart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { Images } from '../../assets/images';

function NavBar() {
  const { cartItems } = useContext(ProductsContext);
  const navigate = useNavigate();

  const totalCartItemsCount = (products) => {
    let totalCartValue;
    if (products.length) {
      totalCartValue = cartItems.reduce((acc, item) => acc + item.count, 0);
    } else {
      totalCartValue = 0;
    }
    return totalCartValue;
  };
  
  const removeToken = () => {
    setTimeout(() => {
      localStorage.removeItem("accessToken")
      navigate("/login");
    }, 3000);
  }
  return (
    <>
    <header className='navbar'>
      <nav className='navbar-container'>
        <div className='navbar-section'>
          <div className='navbar-logo'>
            <Link to='/dashboard'>
              <img src={Images.LogoOne} className='logo' />
            </Link>
            <Link to='/report'>
            <h5>Report</h5>
            </Link>
          </div>
          <div className='navbar-menu'>
            <ul>
              <li className='navbar-li'>
              <Link to='/filter'>
            <FaFilter className='filter-icon' />
            </Link>
                </li>
              <li className='navbar-li'>
                <Link to='/cart'><FaShoppingCart className='cart-icon' /><span>{totalCartItemsCount(cartItems)}</span></Link>
              </li>
              <li>
              <FaSignOutAlt onClick={removeToken} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}

export default NavBar;
