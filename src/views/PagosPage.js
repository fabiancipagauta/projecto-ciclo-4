import React from 'react';
import FormTitle from '../components/commons/FormTitle';
import SectionDescription from '../components/commons/SectionDescription';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';
import PagosForm from '../components/pagos/PagosForm';

const PagosPage = () => {
  return (
    <div>
      <HeaderMain sectionTitle="Reporte de Pagos"></HeaderMain>
      <MainContainer>
        <SectionDescription>
          Solicita tu reporte de pago seleccionando la fecha a consultar
        </SectionDescription>
        <FormTitle title="Selecciona la fecha para generar el reporte" />
        <PagosForm />
      </MainContainer>
    </div>
  );
};

export default PagosPage;
