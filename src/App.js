import React from 'react';
import './styles/index.css';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Laporan from './pages/laporan';
import ManajemenUser from './pages/manajemenUser';
import PaketLaundry from './pages/paketLaundry';
import TipePembayaran from './pages/tipePembayaran';
import Transaksi from './pages/transaksi';
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
        <Route path="/tipe-pembayaran" element={<TipePembayaran />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
