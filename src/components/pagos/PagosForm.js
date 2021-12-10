import React from 'react';
import InputDate from '../commons/InputDate';

const PagosForm = () => {
  return (
    <>
      <form action="">
        <InputDate inputName={'date_pagos'} inputId="input_pagos" inputLabel="Fecha a consultar" />
        <input type="button" value="Aceptar" className="btn btn-primary" />
      </form>
    </>
  );
};

export default PagosForm;
