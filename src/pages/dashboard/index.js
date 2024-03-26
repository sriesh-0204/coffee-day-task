import React, { useContext } from 'react';
import './index.scss'
import NavBar from '../../component/navBarMenu';

const Dashboard = () => {

  return (
    <div className='home'>
      <div className='home-container'>
        <div className='home-navbar'>
          <NavBar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
