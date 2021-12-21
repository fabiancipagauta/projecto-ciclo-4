import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';
import BienvenidoPage from '../views/BienvenidoPage';
import PerfilPage from '../views/PerfilPage';
import VacacionesPage from '../views/VacacionesPage';
import PagosPage from '../views/PagosPage';
import CertificadoPage from '../views/CertificadoPage';
import PermisosPage from '../views/PermisosPage';
import Page404 from '../views/Page404';

import '../css/PsnRoutes.css';
import GestionUsuariosPage from '../views/GestionUsuariosPage';
import { AdminRoutes } from './AdminRoutes';
import GestionPagosPage from '../views/GestionPagosPage';
import GestionPermisosPage from '../views/GestionPermisosPage';
import GestionVacacionesPage from '../views/GestionVacacionesPage';

const PsnRoutes = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <main className="psn-main">
        <Routes>
          <Route path="/" element={<BienvenidoPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/vacaciones" element={<VacacionesPage />} />
          <Route path="/pagos" element={<PagosPage />} />
          <Route path="/certificado" element={<CertificadoPage />} />
          <Route path="/permisos" element={<PermisosPage />} />
          <Route
            path="/gestion-usuarios"
            element={
              <AdminRoutes>
                <GestionUsuariosPage />
              </AdminRoutes>
            }
          />

          <Route
            path="/gestion-pagos"
            element={
              <AdminRoutes>
                <GestionPagosPage />
              </AdminRoutes>
            }
          />

          <Route
            path="/gestion-permisos"
            element={
              <AdminRoutes>
                <GestionPermisosPage />
              </AdminRoutes>
            }
          />

          <Route
            path="/gestion-vacaciones"
            element={
              <AdminRoutes>
                <GestionVacacionesPage />
              </AdminRoutes>
            }
          />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </>
  );
};

export default PsnRoutes;
