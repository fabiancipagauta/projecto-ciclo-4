import React, { useEffect, useState } from 'react';
import ModalComponent from '../components/commons/ModalComponent';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';
import GestionVacacionesModal from '../components/gestionVacaciones/GestionVacacionesModal';
import GetionVacaciones from '../components/gestionVacaciones/GetionVacaciones';
import { __vacationEdit } from '../helpers/__vacationEdit';
import { __vacationsList } from '../helpers/__vacationsList';
import { useModal } from '../hooks/useModal';

const GestionVacacionesPage = () => {
  const [isOpenConfirn, openModalConfirm, closeModalConfirn] = useModal();
  const [isOpen, openModal, closeModal] = useModal();
  const [message, setMessage] = useState('');
  const [dataList, setDataList] = useState([]);
  const [infoVaciones, setInfoVaciones] = useState({});
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const req = async () => {
      try {
        let res = await __vacationsList();
        if (res.estado === 'ok') {
          setDataList(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    req();
  }, []);

  useEffect(() => {
    const req = async () => {
      try {
        let res = await __vacationsList();
        if (res.estado === 'ok') {
          setDataList(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    req();
  }, [update]);

  const editVacationOk = async (body) => {
    try {
      let res = await __vacationEdit(body);
      if (res.status === 'ok') {
        closeModal();
        setMessage('Vaciciones Actualizadas: Aprobado');
        openModalConfirm();
        setUpdate(!update);
      } else {
        setMessage(res.msg);
        closeModal();
        openModalConfirm();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editVacationBad = async (body) => {
    try {
      let res = await __vacationEdit(body);
      if (res.status === 'ok') {
        closeModal();
        setMessage('Vaciciones Actualizadas: Rechazado');
        openModalConfirm();
        setUpdate(!update);
      } else {
        setMessage(res.msg);
        closeModal();
        openModalConfirm();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ModalComponent isOpen={isOpenConfirn} closeModal={closeModalConfirn}>
        {message}
      </ModalComponent>
      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        <GestionVacacionesModal
          data={infoVaciones}
          editVacationOk={editVacationOk}
          editVacationBad={editVacationBad}
        />
      </ModalComponent>
      <HeaderMain sectionTitle="Gestión de Vacaciones"></HeaderMain>
      <MainContainer>
        <GetionVacaciones openModal={openModal} data={dataList} setInfoVaciones={setInfoVaciones} />
      </MainContainer>
    </>
  );
};

export default GestionVacacionesPage;
