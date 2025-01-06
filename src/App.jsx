import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invitation from './pages/invitation';
import Admin from './pages/admin';

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Invitation />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
