import React from 'react';
import './styles/index.css';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Laporan from './pages/laporan';
import ManajemenUser from './pages/manajemenUser';
import PaketLaundry from './pages/paketLaundry';
import SyaratDanKetentuan from './pages/syaratDanKetentuan';
import KontakKami from './pages/Kontakkami';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/manajemen-user" element={<ManajemenUser />} />
        <Route path="/paket-laundry" element={<PaketLaundry />} />
        <Route path="/syarat-dan-ketentuan" element={<SyaratDanKetentuan />} />
        <Route path="/kontak-kami" element={<KontakKami />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
