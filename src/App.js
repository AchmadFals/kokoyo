import React from 'react';
import './styles/index.css';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import PaketLaundry from './pages/paketLaundry';
import Kontakkami from './pages/Kontakkami';
import SyaratDanKetentuan from "./pages/syaratDanKetentuan";

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
        <Route path="/paket-laundry" element={<PaketLaundry />} />
        <Route path="/kontak-kami" element={<Kontakkami />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/syarat-dan-ketentuan" element={<SyaratDanKetentuan />} />
      </Routes>
    </>
  );
}

export default App;