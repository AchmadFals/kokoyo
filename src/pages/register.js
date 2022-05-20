import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import crop from "../asset/crop.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsEyeSlashFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleRegister = async (e) => {
    try {
      const { fullName, username, email, password, passwordConfirmation } =
        formData;
      console.log("formData", formData);
      await axios.post("http://fresh-laundry.landside.my.id/register", {
        fullName,
        username,
        email,
        password,
        passwordConfirmation,
      });
      console.log(navigate);
      toast("Success Register");
      navigate("/login");
    } catch (err) {
      toast.error("Required parameters missing", {
        theme: "colored",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  console.log("formData =>", formData);

  return (
    <>
      <div className="bg-cyan-200 min-h-screen">
        <div className="row">
          <div className="col-6 p-3"></div>
        </div>
        <div className="row w-96 md:w-1/3 lg:w-1/3 bg-white shadow-lg shadow-gray-400 text-center m-auto rounded-xl py-3.5">
          <div className="form px-6 py-4">
            <img
              src={crop}
              className="h-16 sm:h-64 md:h-24 lg:h-24 mx-auto"
              alt="crop"
            />
            <div
              cposition="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHoverlassName="form-body"
            >
              <div className="fullname pb-2">
                <label
                  className="form__label block flex font-medium text-neutral-500"
                  for="fullName"
                >
                  Full Name
                </label>
                <input
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      fullName: e.target.value,
                    });
                  }}
                  className="form__input w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text"
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                />
              </div>
              <div className="username pb-2">
                <label
                  className="form__label block flex font-medium text-neutral-500"
                  for="userName"
                >
                  Username
                </label>
                <input
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      username: e.target.value,
                    });
                  }}
                  type="text"
                  name=""
                  id="userName"
                  className="w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text"
                  placeholder="Username"
                />
              </div>
              <div className="email pb-2">
                <label
                  className="form__label block flex font-medium text-neutral-500"
                  for="email"
                >
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                  }}
                  type="email"
                  id="email"
                  className="form__input w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text"
                  placeholder="Email"
                />
              </div>
              <div className="password pb-2">
                <label
                  className="form__label block flex font-medium text-neutral-500"
                  for="password"
                >
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
                  )}
                </div>
              </div>
              <div className="confirm-password pb-3">
                <label
                  className="form__label block flex font-medium text-neutral-500"
                  for="confirm"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        passwordConfirmation: e.target.value,
                      });
                    }}
                    className="form__input w-full px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-lg cursor-text"
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>
            <div className="text-center flex items-center pb-3">
              <input
                type="checkbox"
                id="remember"
                value="remember"
                className="mr-1.5 cursor-pointer"
              />
              <label for="remember">Remember Me</label>
            </div>
            <div>
              <button
                onClick={handleRegister}
                type="submit"
                className="transition duration-75 border-2 border-sky-500 w-full px-4 py-1 rounded-md bg-sky-500 text-white"
              >
                Register
              </button>
            </div>
          </div>
          <div className="text-center pb-3">
            <h5>
              Already got an account?
              <Link to="/login" className="text-sky-500">
                {" "}
                Log in
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
