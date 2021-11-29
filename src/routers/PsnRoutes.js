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

          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </>
  );
};

export default PsnRoutes;
