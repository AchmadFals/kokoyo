import React from 'react';
import Navbar from './Navbar';
import menu from './menu.jpg';

const Dashboard=() => {
  return <div>
            <Navbar/>
            <nav className='navbar fixed-top navbar-expand-lg navbar-dark p-md-3'>
              <div className='container'>
                <a href='#' class="navbar-brand">Web Zone</a>
              </div>
            </nav>
            <div>
              <img className='bg-center' src={menu}/>
              <div className='content text-center'>
                <h1 className='text-black'>WEB ZONE</h1>
              </div>
            </div>
         </div>
};

export default Dashboard;