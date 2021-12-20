import React from 'react';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';
import PeticionPermisos from '../components/permisos/PeticionPermisos';

const PermisosPage = () => {
  return (
    <div>
      <HeaderMain sectionTitle="Solicitud de Permisos">
        <h4>Solicitud de Permisos</h4>
      </HeaderMain>
      <MainContainer>
        <PeticionPermisos />
      </MainContainer>
    </div>
  );
};

export default PermisosPage;
