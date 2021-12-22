import React from 'react';
import useForm from '../../hooks/useForm';
import { useModal } from '../../hooks/useModal';
import InputDate from '../commons/InputDate';
import ModalComponent from '../commons/ModalComponent';

const VacationsForm = ({ createVacation, isOpenRequest, openModalRequest, closeModalRequest }) => {
  const initialForm = {
    fecha_inicio: '',
    fecha_fin: '',
  };

  const [isOpenControlRequest, openModalControlRequest, closeModalControlRequest] = useModal(false);

  const [form, handleInputChange] = useForm(initialForm);

  const handleRequestModal = () => {
    const { fecha_inicio, fecha_fin } = form;
    if (!fecha_inicio || !fecha_fin) {
      openModalControlRequest();
      return;
    }
    openModalRequest();
  };

  const handleAccept = (e) => {
    createVacation(form);
  };

  return (
    <>
      <ModalComponent isOpen={isOpenControlRequest} closeModal={closeModalControlRequest}>
        <p>Todos los campos son obligatorios</p>
      </ModalComponent>
      <ModalComponent isOpen={isOpenRequest} closeModal={closeModalRequest}>
        <div>
          <p>¿Enviar solicitud?</p>
          <button className="btn btn-success" onClick={handleAccept}>
            Aceptar
          </button>
          <button className="btn btn-danger ms-3" onClick={closeModalRequest}>
            Cancelar
          </button>
        </div>
      </ModalComponent>
      <form>
        <div className="row">
          <InputDate
            inputName={'fecha_inicio'}
            inputId={'date_from'}
            inputLabel={'Desde'}
            inputClass={'form-control'}
            onChange={handleInputChange}
            value={form.date_from}
            cl="col"
          />
          <InputDate
            inputName={'fecha_fin'}
            inputId={'date_to'}
            inputLabel={'Hasta'}
            inputClass={'form-control'}
            onChange={handleInputChange}
            value={form.date_to}
            cl="col"
          />
        </div>
        <button type="button" onClick={handleRequestModal} className="btn btn-primary my-5">
          Aceptar
        </button>
      </form>
    </>
  );
};

export default VacationsForm;
