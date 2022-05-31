import React from "react";
import Navbar from "../Navbar";

const Transaksi = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/asset/backround.jpg"
          })`,
        }}
        className="h-[100vh] bg-no-repeat w-[100%] bg-cover"
      >
        <div className="grid grid-cols-2 ">
          <div className="px-32 pt-52">
            <div className="mb-4 pl-12">
              <h1 className="text-4xl font-Oswald font-bold">Contact Us</h1>
            </div>
            <div>
              <input
                placeholder="Name"
                type="text"
                id="name"
                className="px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-2xl cursor-text"
              ></input>
            </div>
            <div className="mt-2.5">
              <input
                placeholder="Email"
                type="text"
                id="email"
                className="px-4 py-1 border-2 border-grey-500 focus-visible:outline-none rounded-2xl cursor-text"
              ></input>
            </div>
            <div className="mt-2.5">
              <input
                placeholder="Message"
                type="text"
                className="px-4 py-1 pb-16 border-2 border-grey-500 focus-visible:outline-none rounded-2xl cursor-text"
              ></input>
            </div>
            <div className="mt-5 pl-[80px]">
              <button className="transition duration-75 border-2 border-sky-500 w-24 px-4 py-1 rounded-2xl bg-sky-500 text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaksi;
