import React from 'react';
import useForm from '../../hooks/useForm';
import { useModal } from '../../hooks/useModal';
import InputDate from '../commons/InputDate';
import ModalComponent from '../commons/ModalComponent';

const VacationsForm = () => {
  const initialForm = {
    date_from: '',
    date_to: '',
  };

  const [isOpenControlRequest, openModalControlRequest, closeModalControlRequest] = useModal(false);
  const [isOpenRequest, openModalRequest, closeModalRequest] = useModal(false);
  const [form, handleInputChange] = useForm(initialForm);

  const handleRequestModal = () => {
    const { date_from, date_to } = form;
    if (!date_from.trim() || !date_to.trim()) {
      openModalControlRequest();
      return;
    }
    openModalRequest();
  };

  const sendVacationRequest = () => {
    console.log(form.date_from, form.date_to);
  };

  return (
    <>
      <ModalComponent isOpen={isOpenControlRequest} closeModal={closeModalControlRequest}>
        <p>Todos los campos son obligatorios</p>
      </ModalComponent>
      <ModalComponent isOpen={isOpenRequest} closeModal={closeModalRequest}>
        <div>
          <button className="btn btn-success" onClick={sendVacationRequest}>
            Aceptar
          </button>
          <button className="btn btn-danger ms-3" onClick={closeModalRequest}>
            Cancelar
          </button>
        </div>
      </ModalComponent>
      <form>
        <InputDate
          inputName={'date_from'}
          inputId={'date_from'}
          inputLabel={'Desde'}
          inputClass={''}
          onChange={handleInputChange}
          value={form.date_from}
        />
        <span></span>
        <InputDate
          inputName={'date_to'}
          inputId={'date_to'}
          inputLabel={'Hasta'}
          inputClass={''}
          onChange={handleInputChange}
          value={form.date_to}
        />
        <input
          type="button"
          value="Aceptar"
          onClick={handleRequestModal}
          className="btn btn-primary"
        />
      </form>
    </>
  );
};

export default VacationsForm;
