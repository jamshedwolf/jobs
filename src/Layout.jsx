// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './components/Nav';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      
    </div>
  );
};

export default Layout;
