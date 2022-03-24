import React from 'react';
import {Link} from 'react-router-dom';

const Login=() => {
  return (
    <div className="bg-cyan-400 min-h-screen">
      <div className="row">
        <div className="col-6 p-7"></div>
      </div>
      <div className="row w-1/3 bg-white shadow-lg shadow-sky-800 text-center m-auto rounded-xl py-3.5">
        <div className="form px-6 py-4">
          <img src="https://www.pinclipart.com/picdir/middle/387-3873569_catalyst-react-js-logo-svg-clipart.png" />
          <div className="form-body">
              <div className="username pb-2">
                <label className="form__label block flex font-bold text-emerald-500" for="username">Username</label>
                <input className="form__input w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text" type="text" id="userName" placeholder="Username"/>
              </div>
              <div className="password pb-2">
                <label className="form__label block flex font-bold text-emerald-500" for="password">Password</label>
                <input className="form__input w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text" type="password" id="password" placeholder="Password"/>
              </div>
              <div className="text-center flex items-center pb-3">
                <input type="checkbox" id="remember" value="remember" className="mr-1.5"/>
                <label>Remember Me</label>
              </div>
              <div class="footer">
              <button type="submit" className="transition duration-75 border-2 border-sky-500 w-full px-4 py-1 rounded-md bg-sky-500 text-white">Log in</button>
            </div>
          </div>
        </div>
        <div className='text-center pb-3'>
          <h5>Don't have an account?<Link to="/Register" className="text-sky-500"> Registered</Link></h5>
        </div>
      </div>
    </div>
  );
}

export default Login;