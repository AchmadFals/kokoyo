import React from "react";
import Navbar from "../Navbar";

const ManajemenUser = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-24">
        <div className="font-semibold text-3xl">
          <h2>Data Karyawan</h2>
        </div>
        <div className="border-2 border-slate-300">
          <div>
            <h3 className="mb-1">Data Karyawan</h3>
            <ol>
              <li>orang pertama</li>
              <li>orang kedua</li>
              <li>orang ketiga</li>
              <li>orang keempat</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManajemenUser;
