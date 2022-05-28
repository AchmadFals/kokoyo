import React from "react";
import Navbar from "../Navbar";
import Laundry from "../asset/laundry.png";
import Foto from "../asset/foto.jpg";

const paketLaundry = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src={Foto} alt="laundry" className="w-full mt-10" />
      </div>
      <div className="bg-slate-200 pt-7 pb-14">
        <div className="relative pt-5">
          <h2 className="text-center text-orange-500 font-extrabold text-4xl mt-10 font-poppins">
            Jasa Laundry Kami
          </h2>
          <div
            className="absolute w-36 h-1 bg-[#5c5c5c] bottom-[-16px] left-[50%]"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl mx-2.5 shadow-md shadow-gray-500 mt-11">
            <h2 className="text-center mb-4 font-bold text-2xl text-black mt-3 font-poppins">
              Laundry Kiloan
            </h2>
            <p className="text-center font-normal mx-2.5 mb-4 font-poppins">
              Layanan laundry untuk baju kiloan di Tambakboyo dan sekitarnya,
              cocok untuk dipakai sehari-hari. Termasuk mencuci, menggosok dan
              melipat. Bisa jemput
            </p>
          </div>
          <div className="bg-white rounded-xl mx-2.5 shadow-md shadow-gray-500 mt-11">
            <h4 className="text-center mb-4 font-bold text-2xl text-black mt-3 font-poppins">
              Laundry Unit
            </h4>
            <p className="text-center font-normal mx-2.5 mb-4 font-poppins">
              Layanan laundry unit seperti kemeja, jas dll. Cocok untuk pakaian
              spesial Anda. Pengerjaan detail, bersih dengan harga terjangkau.
            </p>
          </div>
          <div className="bg-white rounded-xl mx-2.5 shadow-md shadow-gray-500 mt-11">
            <h4 className="text-center mb-4 font-bold text-2xl text-black mt-3 font-poppins">
              Layanan Pembersihan Karpet
            </h4>
            <p className="text-center font-normal mx-2.5 mb-4 font-poppins">
              Kami melakukan pembersihan karpet untuk rumah, masjid dan
              pembersihan karpet kantor untuk wilayah Jabodetabek, kami siap
              datang ke lokasi
            </p>
          </div>
          <div className="bg-white rounded-xl mx-2.5 shadow-md shadow-gray-500 mt-11">
            <h4 className="text-center mb-4 font-bold text-2xl text-black mt-3 font-poppins">
              Laundry sepatu
            </h4>
            <p className="text-center font-normal mx-2.5 mb-4 font-poppins">
              Kami melayani jasa laundry sepatu juga
            </p>
          </div>
          <div className="bg-white rounded-xl mx-2.5 shadow-md shadow-gray-500 mt-11">
            <h4 className="text-center mb-4 font-bold text-2xl text-black mt-3 font-poppins">
              Laundry tas
            </h4>
            <p className="text-center font-normal mx-2.5 mb-4 font-poppins">
              Kami juga melayani semua jenis laundry tas
            </p>
          </div>
          <div className="bg-white rounded-xl mx-2.5 shadow-md shadow-gray-500 mt-11">
            <h4 className="text-center mb-4 font-bold text-2xl text-black mt-3 font-poppins">
              Laundry Kasur
            </h4>
            <p className="text-center font-normal mx-2.5 mb-4 font-poppins">
              Kasur anda banyak kutunya dan tubuh anda gatal-gatal serahkan pada
              kami
            </p>
          </div>
        </div>
      </div>
      <div className="bg-sky-900 pt-4">
        <h1 className="text-center font-semibold text-white text-3xl font-poppins">
          Don't have time to wash....!!!
        </h1>
        <div class="w-full grid grid-cols-3 ">
          <div className="">
            <img src={Laundry} alt="londri" className="h-20 m-10 mb-26" />
          </div>
          <div>
            <h2 className="text-left font-semibold text-white text-2xl mt-4 mb-4 font-poppins">
              About
            </h2>
            {/* <div
              className="absolute w-36 h-1 bg-slate-600 bottom-[-16px] left-[50%]"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            ></div> */}
            <p className="text-left mr-10 text-white font-medium font-poppins">
              Bingung karena jemuran belum kering juga? Jemuran numpuk, banyak
              yang ga kebagian tempat? Baju pada bau apek? Cleanlaundry
              solusinya. Jasa laundry yang BISA menyiapkan pakaian Anda dengan
              cepat, rapi, bersih, dan tentunya WANGI. Cleanlaundry buka 15 jam
              setiap hari!
            </p>
          </div>
          <div>
            <h2 className="text-left font-semibold text-white text-2xl mt-4 mb-4 font-poppins">
              Contact Us
            </h2>
            {/* <div
              className="absolute w-36 h-1 bg-slate-600 bottom-[-16px] left-[50%]"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            ></div> */}
            <h4 className="text-left font-lg text-white font-medium font-poppins">
              WhatsApp
            </h4>
            <p className="mb-2.5 text-white font-poppins">085708648046</p>
            <h4 className="text-left font-lg text-white font-medium font-poppins">
              TelePhone
            </h4>
            <p className="mb-2.5 text-white font-poppins">085853757211</p>
            <h4 className="text-left font-lg text-white font-medium font-poppins">
              Email
            </h4>
            <p className="text-white mb-6 font-poppins">
              adityaontonk1414@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default paketLaundry;
