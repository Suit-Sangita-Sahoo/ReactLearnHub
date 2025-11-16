import React from 'react';
import { Navigate } from 'react-router-dom';

const Privaterouting = ({ children }) => {
  const token = localStorage.getItem("Token"); 

  return token ? children : <Navigate to="/login" replace />;
};

export default Privaterouting;
