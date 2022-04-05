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
              <img src={Uwong} alt="wangi" className="rounded-xl" />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 pt-16">
          <div className="bg-cyan-500">
            <h2 className="text-center text-4xl font-semibold text-white p-2.5 mt-10">
              Spray Tan
            </h2>
            <br />
            <p className="text-center text-2xl text-white">
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
            <p className="text-center text-2xl text-white">
              Z Bods mobile spray tanning service is done at the comfortability
              of your home. Find out what sets us apart from others.
            </p>
          </div>
        </div>
        <div class="w-full grid grid-cols-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
