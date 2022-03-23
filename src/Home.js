import React from 'react';
import {Link} from 'react-router-dom';

const Home=() => {
  return (
    <div>
      <div className='icon'>
        <div className='icon_class'>
        </div>
        <div className='text'>Home Page</div>
      </div>
     
      <div className='text-center'>
        <Link to="/Dashboard" className='text-black-50'>
          <h5>Home Page</h5>
        </Link>
      </div>
    </div>

  )
}

export default Home;