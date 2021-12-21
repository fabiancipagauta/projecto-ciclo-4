import React, { useContext, useState } from 'react';
import { AuthContext } from '../auth/authContext';
import ModalComponent from '../components/commons/ModalComponent';
import SectionDescription from '../components/commons/SectionDescription';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';
import PeticionPermisos from '../components/permisos/PeticionPermisos';
import { __licenseRequest } from '../helpers/__licenseReques';
import { useModal } from '../hooks/useModal';

const PermisosPage = () => {
  const [message, setMessage] = useState('');
  const { user } = useContext(AuthContext);
  const [isOpen, onOpen, onClose] = useModal();

  const createLicense = async (data) => {
    const dataLicense = {
      ...data,
      estado: 'pendiente',
      comentarios: '',
      id_usuario: user.id,
    };

    try {
      let res = await __licenseRequest(dataLicense);
      console.log(res);
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
      <HeaderMain sectionTitle="Solicitud de Permisos"></HeaderMain>

      <MainContainer>
        <SectionDescription>
          <span>En esta sección podrás solicitar tus Permisos</span>
          <br />
          <span>Recuerda:</span>
          <br />
          <span>Solo que puedes solicitar permisos remunerados y no remunerados </span>
        </SectionDescription>
        <PeticionPermisos createLicense={createLicense} />
      </MainContainer>
    </div>
  );
};

export default PermisosPage;
