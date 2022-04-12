import React from "react";
import Navbar from "../Navbar";
import Londri from "../asset/londrii.png";

const paketLaundry = () => {
  return (
    <div>
      <Navbar />
      <div className="relative pt-10">
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
      <div className="bg-slate-100 pt-7 pb-7">
        <div class="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl mx-2.5 shadow-md shadow-gray-500 mt-11">
            <h2 className="text-center mb-4 font-bold text-2xl text-black mt-3">
              Laundry Kiloan
            </h2>
            <p className="text-center font-normal mx-2.5 mb-4">
              Laundry service for kilo clothes in Ciputat and its surroundings,
              suitable for everyday wear. Includes washing, scrubbing and
              folding. Can pick up
            </p>
          </div>
          <div className="bg-white rounded-xl mx-2.5 shadow-md shadow-gray-500 mt-11">
            <h4 className="text-center mb-4 font-bold text-2xl text-black mt-3">
              Laundry Unit
            </h4>
            <p className="text-center font-normal mx-2.5 mb-4">
              Unit laundry services such as shirts, suits etc. Perfect for your
              special outfit. Detailed workmanship, clean at an affordable
              price.
            </p>
          </div>
          <div className="bg-white rounded-xl mx-2.5 shadow-md shadow-gray-500 mt-11">
            <h4 className="text-center mb-4 font-bold text-2xl text-black mt-3">
              Carpet Cleaning Service
            </h4>
            <p className="text-center font-normal mx-2.5 mb-4">
              We do carpet cleaning for homes, mosques and cleaning office
              carpets for the Jabodetabek area, we are ready to come to the
              location
            </p>
          </div>
          <div className="bg-white rounded-xl mx-2.5 shadow-md shadow-gray-500 mt-11">
            <h4 className="text-center mb-4 font-bold text-2xl text-black mt-3">
              Laundry sepatu
            </h4>
            <p className="text-center font-normal mx-2.5 mb-4">
              Kami melayani jasa laundry sepatu juga
            </p>
          </div>
          <div className="bg-white rounded-xl mx-2.5 shadow-md shadow-gray-500 mt-11">
            <h4 className="text-center mb-4 font-bold text-2xl text-black mt-3">
              Laundry tas
            </h4>
            <p className="text-center font-normal mx-2.5 mb-4">
              Kami juga melayani semua jenis laundry tas
            </p>
          </div>
          <div className="bg-white rounded-xl mx-2.5 shadow-md shadow-gray-500 mt-11">
            <h4 className="text-center mb-4 font-bold text-2xl text-black mt-3">
              Laundry Kasur
            </h4>
            <p className="text-center font-normal mx-2.5 mb-4">
              Kasur anda banyak kutunya dan tubuh anda gatal-gatal serahkan pada
              kami
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 pt-4">
        <h1 className="text-center font-semibold text-white text-3xl">
          Don't have time to wash....!!! Contact us
        </h1>
        <div class="w-full grid grid-cols-3 ">
          <div className="">
            <img src={Londri} alt="londri" className="h-12 m-10 mb-26" />
          </div>
          <div>
            <h2 className="text-center font-semibold text-white text-2xl mt-4 mb-4">
              About
            </h2>
            <p className="text-left mr-10 text-white font-medium">
              Bingung karena jemuran belum kering juga? Jemuran numpuk, banyak
              yang ga kebagian tempat? Baju pada bau apek? KHONDI Laundry
              solusinya. Jasa laundry yang BISA menyiapkan pakaian Anda dengan
              cepat, rapi, bersih, dan tentunya WANGI. KHONDI laundry buka 15
              jam setiap hari!
            </p>
          </div>
          <div>
            <h2 className="text-center font-semibold text-white text-2xl mt-4 mb-4">
              Contact Us
            </h2>
            <h4 className="text-left font-lg text-white font-medium">
              WhatsApp
            </h4>
            <p className="mb-2.5 text-white">085708648046</p>
            <h4 className="text-left font-lg text-white font-medium">
              TelePhone
            </h4>
            <p className="mb-2.5 text-white">085853757211</p>
            <h4 className="text-left font-lg text-white font-medium">Email</h4>
            <p className="text-white mb-6">adityaontonk1414@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default paketLaundry;
