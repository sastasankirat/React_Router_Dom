import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import PaymentPage from './PaymentPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}

export default App;
