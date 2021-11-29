import React from 'react';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';

const PermisosPage = () => {
  return (
    <div>
      <HeaderMain sectionTitle="Solicitud de Permisos">
        <h4>Solicitud de Permisos</h4>
      </HeaderMain>
      <MainContainer>{/**Insertar componente para esta seccion */}</MainContainer>
    </div>
  );
};

export default PermisosPage;
