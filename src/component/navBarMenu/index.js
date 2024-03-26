import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../../data/appConstant';
import './index.scss';

function NavBar() {
  return (
    <>
    <header className='navbar'>
      <nav className='navbar-container'>
        <div className='navbar-section'>
          <div className='navbar-logo'>
            <h1>T Suresh</h1>
          </div>
          <div className='navbar-menu'>
            <ul>
              <li>
                <Link to='/cart'>{Menu.CART}</Link>
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
