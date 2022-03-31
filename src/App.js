import React from 'react';
import './styles/index.css';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Laporan from './components/Laporan';
import Manajemen_user from './components/Manajemen_user';
import Paket_laundry from './components/Paket_laundry';
import Tipe_pembayaran from './components/Tipe_pembayaran';
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
        <Route path="/manajemen_user" element={<Manajemen_user />} />
        <Route path="/paket_laundry" element={<Paket_laundry />} />
        <Route path="/tipe_pembayaran" element={<Tipe_pembayaran />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
