import React from 'react';
import './App.css';
import './styles/index.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
