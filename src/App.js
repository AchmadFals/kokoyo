import React from 'react';
import './App.css';
import Register from './Register';
import Login from './Login';
import Nav from './nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Login />
      <Register />
    </div>
  );
}

export default App;
