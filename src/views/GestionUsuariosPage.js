import React, { useEffect, useState } from 'react';
import ModalComponent from '../components/commons/ModalComponent';
import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';
import { BtnGestiosUsuario } from '../components/gestionUsuarios/BtnGestiosUsuario';
import GestionUsuariosForm from '../components/gestionUsuarios/GestionUsuariosForm';
import TablaGestionUsuarios from '../components/gestionUsuarios/TablaGestionUsuarios';
import { __userEdit } from '../helpers/__userEdit';
import { __userList } from '../helpers/__usersList';
import { __userCreate } from '../helpers/__userCreate';
import { __userDelete } from '../helpers/__userDelete';
import { useModal } from '../hooks/useModal';

const GestionUsuariosPage = () => {
  const [dataList, setDataList] = useState([]);
  const [dataEdit, setDataEdit] = useState(null);
  const [updateList, setUpdateList] = useState(false);
  const [isOpen, openModal, closeModal] = useModal();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const list = async () => {
      let res = await __userList();
      console.log(res);
      setDataList(res.data);
    };
    list();
  }, []);

  useEffect(() => {
    const list = async () => {
      let res = await __userList();
      console.log(res);
      setDataList(res.data);
    };
    list();
  }, [updateList]);

  const createUser = async (body) => {
    try {
      let res = await __userCreate(body);
      if (res.status === 'ok') {
        setMessage(res.msg);
        openModal();
        setDataEdit(null);
        setUpdateList(!updateList);
        window.location.reload();
      } else {
        setMessage(res.msg);
        openModal();
      }
    } catch (error) {}
  };

  const editUser = async (body) => {
    try {
      let res = await __userEdit(body);
      console.log(res);
      if (res.status === 'ok') {
        setMessage('Usuario actualizado');
        openModal();
        setDataEdit(null);
        setUpdateList(!updateList);
      } else {
        setMessage(res.msg);
        openModal();
      }
    } catch (error) {}
  };

  const deleteUSer = async (id) => {
    try {
      let res = await __userDelete({ _id: id });
      if (res.status === 'ok') {
        setMessage(res.msg);
        openModal();
        setDataEdit(null);
        setUpdateList(!updateList);
      } else {
        setMessage(res.msg);
        openModal();
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        {message}
      </ModalComponent>
      <HeaderMain sectionTitle="Gestión de usuarios">
        <BtnGestiosUsuario setDataEdit={setDataEdit} />
      </HeaderMain>
      <MainContainer>
        <GestionUsuariosForm
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
          editUser={editUser}
          createUser={createUser}
        />
        <TablaGestionUsuarios data={dataList} setDataEdit={setDataEdit} deleteUser={deleteUSer} />
      </MainContainer>
    </div>
  );
};

export default GestionUsuariosPage;
