import React, { useEffect, useState } from 'react';
import { __usersId } from '../../helpers/__usersId';
import useForm from '../../hooks/useForm';

const GestionPagosForm = ({ createPayment }) => {
  const initialForm = {
    id_usuario: '',
    periodo: '',
    cantidad: '',
  };
  const [values, setValues] = useState([]);
  const [form, handleInputChange] = useForm(initialForm);

  useEffect(() => {
    const listID = async () => {
      try {
        let res = await __usersId();
        setValues(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    listID();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPayment(form);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3 col-4">
            <label htmlFor="id_usuario" className="form-label">
              Usuario
            </label>
            <select
              name="id_usuario"
              id="id_usuario"
              className="form-select"
              value={form.id_usuario}
              onChange={handleInputChange}
            >
              <option value="">---Seleccionar---</option>
              {values.map((item) => (
                <option key={item.usuario_id} value={item.usuario_id}>
                  {item.usuario_id}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3 col-4">
            <label htmlFor="periodo" className="form-label">
              Periodo
            </label>
            <input
              type="date"
              name="periodo"
              id="periodo"
              className="form-control"
              value={form.periodo}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3 col-4">
            <label htmlFor="cantidad" className="form-label">
              Salario
            </label>
            <input
              type="number"
              name="cantidad"
              id="cantidad"
              className="form-control"
              value={form.cantidad}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default GestionPagosForm;
