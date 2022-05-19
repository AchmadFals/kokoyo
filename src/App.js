import React from "react";
import "./styles/index.css";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import PaketLaundry from "./pages/paketLaundry";
import Kontakkami from "./pages/Kontakkami";
import SyaratDanKetentuan from "./pages/syaratDanKetentuan";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

const contextClass = {
  success: "bg-blue-600",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/paket-laundry" element={<PaketLaundry />} />
        <Route path="/kontak-kami" element={<Kontakkami />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/syarat-dan-ketentuan" element={<SyaratDanKetentuan />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
