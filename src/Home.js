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
      <div>
        <Link to="/Login">
        <button type="submit">submit</button>
        </Link>
      </div>
    </div>

  )
}

export default Home;