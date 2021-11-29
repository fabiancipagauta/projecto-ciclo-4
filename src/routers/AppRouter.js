import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../views/LoginPage';
import Page404 from '../views/Page404';
import PsnRoutes from './PsnRoutes';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/psn/*" element={<PsnRoutes />}></Route>

          {/* Ruta Error 404 */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
