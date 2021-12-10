import React from 'react';
import FormTitle from '../components/commons/FormTitle';
import SectionDescription from '../components/commons/SectionDescription';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';
import VacationsForm from '../components/vacaciones/VacationsForm';

const VacacionesPage = () => {
  return (
    <div>
      <HeaderMain sectionTitle="Solicitud de Vacaciones"></HeaderMain>
      <MainContainer>
        <SectionDescription>
          En esta sección podrás solicitar tus vacaciones 🏖.
          <br />
          Recuerda:
          <br />
          Solo puede solicitar 15 días calendario durante el año y NO son acumulables.
        </SectionDescription>
        <FormTitle title="Selecciona la fecha para tus vacaciones" />
        <VacationsForm />
      </MainContainer>
    </div>
  );
};

export default VacacionesPage;
