import React from 'react';
import './styles/index.css';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Laporan from './components/Laporan';
import ManajemenUser from './components/ManajemenUser';
import PaketLaundry from './components/paketLaundry';
import TipePembayaran from './components/TipePembayaran';
import Transaksi from './components/Transaksi';
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
