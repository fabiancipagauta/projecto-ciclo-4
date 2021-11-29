import React from 'react';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';

const PagosPage = () => {
  return (
    <div>
      <HeaderMain sectionTitle="Reporte de Pagos">
        <h4>Botones opcionales</h4>
      </HeaderMain>
      <MainContainer>{/**Insertar componente para esta seccion */}</MainContainer>
    </div>
  );
};

export default PagosPage;
