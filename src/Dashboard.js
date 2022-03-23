import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

const Dashboard=() => {
  return (
    <div>
      <div className='icon'>
        <div className='icon_class'>
        </div>
        <div className='text'>Dashboard</div>
      </div>
     
      <div className='text-center'>
        <Link to="/Register" className='text-black-50'>
          <h5>Dashboard Page</h5>
        </Link>
      </div>
    </div>

  )
}

export default Dashboard;