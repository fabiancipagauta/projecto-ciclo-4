import React from 'react';
import useForm from '../../hooks/useForm';

const PeticionPermisos = ({ createLicense }) => {
  const initialForm = {
    fecha_inicio: '',
    fecha_fin: '',
    tipo_permisos: '',
  };

  const [form, handleInputChange] = useForm(initialForm);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fecha_fin || !form.fecha_inicio || !form.tipo_permisos) {
      alert('datos requeridos');
      return;
    }
    createLicense(form);
  };

  return (
    <>
      <div>
        <h3 className="mb-4">Selecciona la fecha para tus permisos</h3>
        <form>
          <div className="row">
            <div className="col">
              <p>
                <label>Desde</label>
              </p>
              <input
                type="date"
                className="form-control"
                placeholder="Fecha Inicio"
                name="fecha_inicio"
                value={form.fecha_inicio}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <p className="">
                <label>Hasta</label>
              </p>
              <input
                type="date"
                className="form-control"
                placeholder="Fecha Fin"
                name="fecha_fin"
                value={form.fecha_fin}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="my-5 row align-items-center justify-content-center">
            <div className="col-6">
              <label htmlFor="" className="form-label">
                Tipo permiso
              </label>
              <select
                name="tipo_permisos"
                id=""
                className="form-select"
                value={form.tipo_permisos}
                onChange={handleInputChange}
              >
                <option value="">---Seleccionar---</option>
                <option value="Remunerado">Remunerado</option>
                <option value="No remunerado">No remunerado</option>
              </select>
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PeticionPermisos;
