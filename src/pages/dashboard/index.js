import React, { useContext } from 'react';
import './index.scss'
import NavBar from '../../component/navBarMenu';
import Products from '../products/products';

const Dashboard = () => {

  return (
    <div className='home'>
      <div className='home-container'>
        <div className='home-navbar'>
          <NavBar />
        </div>
          <Products />
      </div>
    </div>
  )
}

export default Dashboard
