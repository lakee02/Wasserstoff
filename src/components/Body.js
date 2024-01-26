import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

// Component representing the main body of the application
const Body = () => {
  return (
    <div>
      {/* Header component for navigation */}
      <Header />
      
      {/* Outlet for rendering nested routes */}
      <Outlet />
    </div>
  );
}

export default Body;
