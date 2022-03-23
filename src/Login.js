import React from 'react';
import {Link} from 'react-router-dom';

const Login=() => {
  return (
    <div>
      <div className='icon'>
        <div className='icon_class'>
        </div>
        <div className='text'>Log in</div>
      </div>
      <div className='row'>
        <div className='col-6'></div>
        <div className='col-6'></div>
      </div>
      <div className='row m-2'>
        <form>
          <div className="form-group">
              <label for="exampleInputUserName">Username: </label>
              <input type="username" className="form-control" placeholder="Masukan username anda"  required/>
          </div>
          <div className="form-group">
              <label for="exampleInputPassword1">Password: </label>
              <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div class="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
              <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>   
        </form>
      </div>
      <div className='text-center'>
        <Link to="/" className='text-black-50'>
          <h5>Create Account</h5>
        </Link>
      </div>
    </div>

  )
}

export default Login;