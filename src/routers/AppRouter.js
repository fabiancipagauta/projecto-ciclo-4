import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../views/LoginPage';
import Page404 from '../views/Page404';
import { PrivateRoutes } from './PrivateRoutes';
import PsnRoutes from './PsnRoutes';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/psn/*"
            element={
              <PrivateRoutes>
                <PsnRoutes />
              </PrivateRoutes>
            }
          />

          {/* Ruta Error 404 */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
