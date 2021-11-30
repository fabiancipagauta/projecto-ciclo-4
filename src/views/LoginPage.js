import React from 'react';
import Login from '../components/login/Login';
import '../css/Login.css';

export const LoginPage = () => {
  return (
    <div className="container align-items-center mt-5">
      <div className="login-container"></div>
      <h2 className="text-center text-primary">Plataforma Sistema de Nomina</h2>
      <Login />
    </div>
  );
};
