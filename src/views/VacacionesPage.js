import React, { useContext, useState } from 'react';
import { AuthContext } from '../auth/authContext';
import FormTitle from '../components/commons/FormTitle';
import ModalComponent from '../components/commons/ModalComponent';
import SectionDescription from '../components/commons/SectionDescription';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';
import VacationsForm from '../components/vacaciones/VacationsForm';
import { __vacationRequest } from '../helpers/__vacationRequest';
import { useModal } from '../hooks/useModal';

const VacacionesPage = () => {
  const [message, setMessage] = useState('');
  const { user } = useContext(AuthContext);
  const [isOpen, onOpen, onClose] = useModal();
  const [isOpenRequest, openModalRequest, closeModalRequest] = useModal(false);

  const createVacation = async (data) => {
    const dataVacation = {
      ...data,
      estado: 'pendiente',
      id_usuario: user.id,
    };
    closeModalRequest();

    try {
      let res = await __vacationRequest(dataVacation);
      if (res.status === 'ok') {
        setMessage(res.msg);
        onOpen();
      } else {
        setMessage(res.msg);
        onOpen();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ModalComponent isOpen={isOpen} closeModal={onClose}>
        {message}
      </ModalComponent>
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
        <VacationsForm
          createVacation={createVacation}
          isOpenRequest={isOpenRequest}
          openModalRequest={openModalRequest}
          closeModalRequest={closeModalRequest}
        />
      </MainContainer>
    </div>
  );
};

export default VacacionesPage;
