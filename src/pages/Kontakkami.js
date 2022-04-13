import React from "react";
import Navbar from "../Navbar";

const Transaksi = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 mt-20 p-4">
        <div className="rounded-md border-slate-700 bg-gray-100 m-3 shadow-md shadow-slate-200">
          <h2 className="text-left font-lg text-black text-2xl ml-2 mt-2 mb-3">
            085708648046
          </h2>
          <h4 className="mx-2 mb-2 text-medium">
            Hubungi kami untuk info lebih lanjut ( Bulu, Bancar, Tambakboyo, Tuban )
          </h4>
        </div>
        <div className="rounded-md border-slate-700 bg-gray-100 m-3 shadow-md shadow-slate-200">
          <h2 className="text-left font-lg text-black text-2xl ml-2 mt-2 mb-3">
            085853757211
          </h2>
          <h4 className="mx-2 mb-2 text-medium">
            Hubungi kami untuk info lebih lanjut ( Tangerang, BSD, Alam Sutra,
            Bintaro, Ciputat, Cinere dan sekitarnya )
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Transaksi;
