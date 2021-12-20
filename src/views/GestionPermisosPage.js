import React, { useEffect, useState } from 'react';
import ModalComponent from '../components/commons/ModalComponent';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';
import GestionPermisosForm from '../components/gestionPermisos/GestionPermisosForm';
import GestionPermisosModal from '../components/gestionPermisos/GestionPermisosModal';
import { __licenseEdit } from '../helpers/__licenseEdit';
import { __lincenseList } from '../helpers/__licenseList';
import { useModal } from '../hooks/useModal';

const GestionPermisosPage = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const [isOpenConfirn, openModalConfirn, closeModalConfirn] = useModal();

  const [dataList, setDataList] = useState([]);
  const [infoPermiso, setInfoPermiso] = useState({});
  const [message, setMessage] = useState('');
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const req = async () => {
      try {
        let res = await __lincenseList();
        if (res.estado === 'ok') {
          setDataList(res.data);
        }
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    req();
  }, []);

  useEffect(() => {
    const req = async () => {
      try {
        let res = await __lincenseList();
        if (res.estado === 'ok') {
          setDataList(res.data);
        }
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    req();
  }, [update]);

  const editLicenseOk = async (body) => {
    try {
      let res = await __licenseEdit(body);
      if (res.status === 'ok') {
        closeModal();
        setMessage('Permisiso Actualizado: Aprobado');
        openModalConfirn();
        setUpdate(!update);
      } else {
        setMessage(res.msg);
        closeModal();
        openModalConfirn();
      }
    } catch (error) {
      console.log(error);
    }
    console.log(body);
  };

  const editLicenseBad = async (body) => {
    try {
      let res = await __licenseEdit(body);
      if (res.status === 'ok') {
        closeModal();
        setMessage('Permisiso Actualizado: Rechazado');
        openModalConfirn();
        setUpdate(!update);
      } else {
        setMessage(res.msg);
        closeModal();
        openModalConfirn();
      }
    } catch (error) {
      console.log(error);
    }
    console.log(body);
  };

  return (
    <>
      <ModalComponent isOpen={isOpenConfirn} closeModal={closeModalConfirn}>
        {message}
      </ModalComponent>
      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        <GestionPermisosModal
          data={infoPermiso}
          editLicenseOk={editLicenseOk}
          editLicenseBad={editLicenseBad}
        />
      </ModalComponent>
      <HeaderMain sectionTitle="Gestión de Permisos"></HeaderMain>
      <MainContainer>
        <GestionPermisosForm
          openModal={openModal}
          data={dataList}
          setInfoPermiso={setInfoPermiso}
        />
      </MainContainer>
    </>
  );
};

export default GestionPermisosPage;
