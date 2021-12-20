import React, { useState } from 'react';
import ModalComponent from '../components/commons/ModalComponent';
import SectionDescription from '../components/commons/SectionDescription';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';
import GestionPagosForm from '../components/getionPagos/GestionPagosForm';
import { __createPayment } from '../helpers/__createPayment';
import { useModal } from '../hooks/useModal';

const GestionPagosPage = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const [message, setMessage] = useState('');

  const createPayment = async (body) => {
    try {
      let res = await __createPayment(body);
      if (res.status === 'ok') {
        setMessage(res.msg);
        openModal();
      } else {
        setMessage(res.msg);
        openModal();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        {message}
      </ModalComponent>
      <HeaderMain sectionTitle="Gestión de Pagos"></HeaderMain>
      <MainContainer>
        <SectionDescription>
          En esta sección podrás resgistrar el pago de todos los empleados de la empresa.
          <br />
          Recuerda:
          <br />
          Debes seleccionar el mes y el dia 30.
        </SectionDescription>
        <GestionPagosForm createPayment={createPayment} />
      </MainContainer>
    </>
  );
};

export default GestionPagosPage;
