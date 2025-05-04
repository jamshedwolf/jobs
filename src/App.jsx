import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Layout from './Layout'; // <-- import Layout
import './App.css';
import Login from './pages/login/Login';
import Sms from './pages/login/Sms';

import Index from './pages/jobs/Index';
import Jdetails from './pages/jobs/Jdetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sms' element={<Sms />} />
          <Route path='/jobs' element={<Index />} />
          <Route path='/jobs/:id' element={<Jdetails />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
