import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/authContext';
import ModalComponent from '../components/commons/ModalComponent';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';
import { __userJobCertificate } from '../helpers/__userJobCertificate';
import { useModal } from '../hooks/useModal';

const CertificadoPage = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const [certificado, setCertificado] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const req = async () => {
      try {
        let res = await __userJobCertificate(user.id);

        if (res.status === 'ok') {
          setCertificado(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    req();
  }, []);

  return (
    <div>
      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        {certificado?.hasOwnProperty('id') && (
          <div className="m-3">
            <h3>CERTIFICADO LABORAL</h3>
            <p>
              La empresa VISA certifica que la persona {certificado.nombre} {certificado.apellido},{' '}
              <br />
              idetificada con el documento {certificado.id}, labora con nosotros desde el dia{' '}
              {certificado.fecha_ingreso} <br />
              en el cargo de {certificado.cargo} devengando un sueldo de {certificado.salario}
            </p>
            <p>Documento: {certificado.id}</p>
            <p>Período: {certificado.periodo}</p>
            <p>Nombre: {certificado.nombre}</p>
            <p>Apellido: {certificado.apellido}</p>
            <p>Fecha ingreso: {certificado.fecha_ingreso}</p>
            <p>Cargo: {certificado.cargo}</p>
            <p>Salario: {certificado.salario}</p>
          </div>
        )}
      </ModalComponent>
      <HeaderMain sectionTitle="Solicitud de Certificado Laboral"></HeaderMain>
      <MainContainer>
        <p className="my-5">Solicita aqui tu certificado laboral 📋</p>
        <button className="btn btn-primary" onClick={openModal}>
          Solicitar certificado laboral
        </button>
      </MainContainer>
    </div>
  );
};

export default CertificadoPage;
