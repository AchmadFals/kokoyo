import React from "react";
import Navbar from "./Navbar";
import Pulau from "./pulau-padar.jpg";
import Uwong from "./uwong.jpg";
import "./App.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <img src={Pulau} className="w-full" alt="bg" />
        <div className="px-24">
          <h1 className="text-center text-5xl mt-20">
            Welcome To Website Official
          </h1>
          <br />
          <h2 className="text-center text-2xl mb-20">
            Cucian menumpuk? tidak punya waktu buat nyuci? Pengen hemat air dan
            listrik tapi pakaian pengennya bersih, rapih dan wangi? Jelas
            kamilah solusinya @khondilaundry
          </h2>
          <br />
          <br />
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <h1 className="text-4xl font-medium">Z Bods Spray Tanning</h1>
              <br />
              <p className="text-justify text-lg">
                Z Bods spray tanning salon is proud to bring one of the best
                spray tanning solutions to Scottsdale, AZ. Abby Zettle, the
                owner, has never been satisfied with the quality of solution in
                Arizona so she set out to find the best spray tanning solution
                focusing on three important areas: no smell, no orange, and no
                streaks. Find out more about the journey of Abby and why she
                opened a spray tanning salon in Scottsdale with her older
                brother Ryan.
              </p>
            </div>
            <div>
              <img
                src={Uwong}
                alt="wangi"
                className="rounded-lg shadow-md shadow-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 pt-16">
          <div className="bg-cyan-500">
            <h2 className="text-center text-4xl font-semibold text-white p-2.5 mt-10">
              Spray Tan
            </h2>
            <br />
            <p className="text-center text-2xl text-white mb-10 mx-3.5">
              Z Bods in store location offers custom sunless airbrush spray tans
              for all skin tones. Discover more details about our solution and
              different packages!
            </p>
          </div>
          <div className="bg-cyan-600">
            <h2 className="text-center text-4xl font-semibold text-white p-2.5 mt-10">
              Mobile Spray Tan
            </h2>
            <br />
            <p className="text-center text-2xl text-white mb-10 mx-3.5">
              Z Bods mobile spray tanning service is done at the comfortability
              of your home. Find out what sets us apart from others.
            </p>
          </div>
        </div>
        <div className="relative">
          <h2 className="text-center text-cyan-700 font-extrabold text-4xl mt-10">
            Jasa Laundry Kami
          </h2>
          <div
            className="absolute w-36 h-1 bg-slate-600 bottom-[-16px] left-[50%]"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
        <div class="w-full grid grid-cols-3 mt-10">
          <div className="bg-slate-200 rounded-md mx-2.5">
            <h2 className="text-center mb-4 font-bold text-2xl text-slate-600">
              Laundry Kiloan
            </h2>
            <p className="text-center font-normal mx-2.5">
              Laundry service for kilo clothes in Ciputat and its surroundings,
              suitable for everyday wear. Includes washing, scrubbing and
              folding. Can pick up
            </p>
          </div>
          <div className="bg-slate-200 rounded-md mx-2.5">
            <h4 className="text-center mb-4 font-bold text-2xl text-slate-600">
              Laundry Unit
            </h4>
            <p className="text-center font-normal mx-2.5">
              Unit laundry services such as shirts, suits etc. Perfect for your
              special outfit. Detailed workmanship, clean at an affordable
              price.
            </p>
          </div>
          <div className="bg-slate-200 rounded-md mx-2.5">
            <h4 className="text-center mb-4 font-bold text-2xl text-slate-600">
              Carpet Cleaning Service
            </h4>
            <p className="text-center font-normal mx-2.5">
              We do carpet cleaning for homes, mosques and cleaning office
              carpets for the Jabodetabek area, we are ready to come to the
              location
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1>Don't have time to wash....!!! Contact us</h1>
        <div class="w-full grid grid-cols-3 mt-10">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
