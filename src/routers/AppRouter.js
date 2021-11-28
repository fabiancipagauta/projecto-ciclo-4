import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../views/LoginPage';
import PsnRoutes from './PsnRoutes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/psn" element={<PsnRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
