import React from 'react';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';

const CertificadoPage = () => {
  return (
    <div>
      <HeaderMain sectionTitle="Solicitud de Certificado Laboral">
        <h4>Botones opcionales</h4>
      </HeaderMain>
      <MainContainer>{/**Insertar componente para esta seccion */}</MainContainer>
    </div>
  );
};

export default CertificadoPage;
