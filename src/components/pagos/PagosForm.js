import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../auth/authContext';
import { __ListPayment } from '../../helpers/__ListPayment';
import { __requestPayment } from '../../helpers/__requestPayment';
import useForm from '../../hooks/useForm';
import { useModal } from '../../hooks/useModal';
import InputDate from '../commons/InputDate';
import ModalComponent from '../commons/ModalComponent';

const PagosForm = () => {
  const initialForm = {
    periodo: '',
  };
  const [values, setValues] = useState([]);
  const { user } = useContext(AuthContext);
  const [isOpen, openModal, closeModal] = useModal();
  const [certificado, setCertificado] = useState({});

  const [form, handleInputChange] = useForm();

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const res = await __ListPayment(user.id);
        let periodos = res.data.map((data) => data.periodo.split('T'));
        setValues(periodos);
      } catch (error) {}
    };
    fetchPayment();
  }, []);

  const handleSubmit = async (e) => {
    console.log(user);
    if (!form.periodo) {
      alert('La fecha es requerida');
      return;
    }

    try {
      let res = await __requestPayment(user.id, form.periodo);

      setCertificado({
        id_certificado: res.data.id_certificado,
        periodo: res.data.periodo.split('T')[0],
        nombre: res.data.nombre,
        apellido: res.data.apellido,
        cantidad: res.data.cantidad,
      });
      openModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        {certificado.hasOwnProperty('id_certificado') && (
          <div className="m-3">
            <h4>Certificado No° : {certificado.id_certificado}</h4>
            <p>Período: {certificado.periodo}</p>
            <p>Nombre: {certificado.nombre}</p>
            <p>Apellido: {certificado.apellido}</p>
            <p>Salario: {certificado.cantidad}</p>
          </div>
        )}
      </ModalComponent>
      <form action="">
        <select name="periodo" id="" value={form.periodo} onChange={handleInputChange}>
          <option value="">---Seleccionar---</option>
          {values.map((p) => (
            <option key={p[0]} value={p[0]}>
              {p[0]}
            </option>
          ))}
        </select>
        <input type="button" value="Aceptar" className="btn btn-primary" onClick={handleSubmit} />
      </form>
    </>
  );
};

export default PagosForm;
