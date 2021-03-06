import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import crop from "../asset/crop.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsEyeSlashFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";


const Login = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);


  const handleLogin = async (e) => {
    toast("Users Login");
       const {username, password} = formData;
         await axios.post("http://fresh-laundry.landside.my.id/login",{
         username,
         password
         })
      console.log(navigate)
      navigate("/dashboard")
  };
  return (
    <div className="bg-cyan-200 min-h-screen">
      <ToastContainer />

      <div className="row">
        <div className="col-6 p-5"></div>
      </div>
      <div className="row w-1/3 bg-white shadow-lg shadow-gray-400 text-center m-auto rounded-xl py-3.5">
        <div className="form px-6 py-4">
          <img src={crop} className="h-24 ml-36" alt="crop" />
          <div className="form-body p-7">
            <div className="username pb-2">
              <label className="form__label block flex font-medium text-neutral-500">
                Username
              </label>
              <input
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    username: e.target.value,
                  });
                }}
                className="form__input w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text"
                type="text"
                id="userName"
                placeholder="Username"
              />
            </div>
            <div className="password pb-2">
              <label className="form__label block flex font-medium text-neutral-500">
                Password
              </label>
              <div className="relative">
                <input
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    });
                  }}
                  className="form__input w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text"
                  type="password"
                  id="password"
                  placeholder="Password"
                />
                {isVisiblePassword ? (
                  <BsEyeFill
                    onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                    className="absolute top-1/2 right-0 translate-y-[-50%] translate-x-[-50%]"
                  />
                ) : (
                  <BsEyeSlashFill
                    onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                    className="absolute top-1/2 right-0 translate-y-[-50%] translate-x-[-50%]"
                  />
                )}{" "}
              </div>
            </div>
            <div className="text-center flex items-center pb-3">
              <input
                type="checkbox"
                id="remember"
                value="remember"
                className="mr-1.5 cursor-pointer"
              />
              <label>Remember Me</label>
            </div>
            <div className="footer">
              <button
                type="button"
                onClick={handleLogin}
                className="transition duration-75 border-2 border-sky-500 w-full px-4 py-1 rounded-md bg-sky-500 text-white"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className="text-center pb-3">
          <h5>
            Don't have an account?
            <Link to="/register" className="text-sky-500">
              {" "}
              Registered
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
