import React from 'react';
import {Link} from 'react-router-dom';

const Register=() => {
  return (
    <div className='bg-cyan-400 min-h-screen'>
      <div className='icon'>
        <div className='icon_class'>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 p-1'></div>
      </div>
      <div className='row w-1/3 bg-white text-center m-auto rounded-xl'>
        <div className="form px-6 py-4">
          <p className="text-stone-400 text-3xl text-center pb-2 text-black font-lato text-3xl font-semibold">Register</p>
            <div className="form-body">
                <div className="fullname pb-2">
                    <label className="form__label block flex font-bold text-cyan-800" for="fullName">Full Name: </label>
                    <input className="form__input w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text" type="text" id="fullName" placeholder="Full Name"/>
                </div>
                <div className="username pb-2">
                    <label className="form__label block flex font-bold text-cyan-800" for="userName">Username: </label>
                    <input  type="text" name="" id="userName"  className="w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text" placeholder="Username"/>
                </div>
                <div className="email pb-2">
                    <label className="form__label block flex font-bold text-cyan-800" for="email">Email: </label>
                    <input  type="email" id="email" className="form__input w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text" placeholder="Email"/>
                </div>
                <div className="password pb-2">
                    <label className="form__label block flex font-bold text-cyan-800" for="password">Password: </label>
                    <input className="form__input w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text" type="password"  id="password" placeholder="Password"/>
                </div>
                <div className="confirm-password pb-2">
                    <label className="form__label block flex font-bold text-cyan-800" for="confirmPassword">Confirm Password: </label>
                    <input className="form__input w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                </div>
            </div>
              <div class="footer">
                <button type="submit" className="transition duration-75 border-2 border-sky-500 w-full px-4 py-1 rounded-md bg-sky-500 text-white">Register</button>
              </div>
        </div>
      </div>
    </div>

  )
}

export default Register;