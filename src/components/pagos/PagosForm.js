import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../auth/authContext';
import { __ListPayment } from '../../helpers/__ListPayment';
import { __requestPayment } from '../../helpers/__requestPayment';
import useForm from '../../hooks/useForm';
import InputDate from '../commons/InputDate';

const PagosForm = () => {
  const initialForm = {
    periodo: '',
  };
  const [values, setValues] = useState([]);
  const { user } = useContext(AuthContext);

  const [form, handleInputChange] = useForm();

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const res = await __ListPayment(user.id);
        console.log(res);
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
      console.log(res);
    } catch (error) {}
    console.log(form.periodo, user.id);
  };

  return (
    <>
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
