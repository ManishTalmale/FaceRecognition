import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import ParticlesBg from 'particles-bg';
import Home from './pages/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParticlesBg type='circle' bg={{
      position: 'absolute',
      zIndex: -999,
      height: 900
    }}
    />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


