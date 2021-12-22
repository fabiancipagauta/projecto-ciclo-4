import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';

const GestionUsuariosForm = ({ dataEdit, setDataEdit, editUser, createUser }) => {
  const initialForm = {
    tipo_usuario: '',
    _id: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    salario: '',
    fecha_ingreso: '',
    cargo: '',
    password: '',
  };

  const [form, handleInputChange, setForm] = useForm(initialForm);

  useEffect(() => {
    if (dataEdit) {
      setForm(dataEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.tipo_usuario ||
      !form.nombre.trim() ||
      !form.apellido.trim() ||
      !form.email.trim() ||
      !form.telefono ||
      !form.direccion.trim() ||
      !form.salario ||
      !form.fecha_ingreso.trim() ||
      !form.cargo.trim()
    ) {
      console.log(form);
      alert('Todos los campos son requeridos');
      return;
    }

    if (dataEdit) {
      if (!form._id.trim()) {
        alert('Todos los campos son requeridos: id');
        return;
      }
      editUser(form);
    } else {
      if (!form.password.trim()) {
        alert('Todos los campos son requeridos password');
        return;
      }
      createUser(form);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row m-3">
        <div className="col">
          <label htmlFor="tipo_usuario" className="form-label">
            Rol
          </label>
          <select
            className="form-select"
            name="tipo_usuario"
            id="tipo_usuario"
            value={form.tipo_usuario}
            onChange={handleInputChange}
          >
            <option value="">---Seleccionar---</option>
            <option value="1">Administrador</option>
            <option value="2">Usuario Nomina</option>
            <option value="3">Empleado</option>
          </select>
        </div>
        <div className="col">
          <h3>{dataEdit ? 'Editar Usuario' : 'Registrar Usuario'}</h3>
        </div>
      </div>

      <div className="row m-3">
        {dataEdit ? (
          ''
        ) : (
          <div className="col">
            <label htmlFor="_id" className="form-label">
              Documento
            </label>
            <input
              type="_id"
              className="form-control"
              name="_id"
              id="_id"
              value={form._id}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="col">
          <label htmlFor="nombre" className="form-label">
            Nombre(s)
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            id="nombre"
            value={form.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <label htmlFor="apellido" className="form-label">
            Apellidos(s)
          </label>
          <input
            type="text"
            className="form-control"
            name="apellido"
            id="apellido"
            value={form.apellido}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row m-3">
        <div className="col">
          <label htmlFor="direccion" className="form-label">
            Direccion
          </label>
          <input
            type="text"
            className="form-control"
            name="direccion"
            id="direccion"
            value={form.direccion}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <label htmlFor="email" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={form.email}
            onChange={handleInputChange}
          />
        </div>
        {dataEdit ? (
          ''
        ) : (
          <div className="col">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={form.password}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="col">
          <label htmlFor="telefono" className="form-label">
            Telefono
          </label>
          <input
            type="phone"
            className="form-control"
            name="telefono"
            id="telefono"
            value={form.telefono}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row m-3 align-items-center">
        <div className="col">
          <label htmlFor="salario" className="form-label">
            Salario
          </label>
          <input
            type="number"
            className="form-control"
            name="salario"
            id="salario"
            value={form.salario}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <label htmlFor="fecha_ingreso" className="form-label">
            Fecha ingreso
          </label>
          <input
            type="date"
            className="form-control"
            name="fecha_ingreso"
            id="fecha_ingreso"
            value={form.fecha_ingreso}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <label htmlFor="cargo" className="form-label">
            Cargo
          </label>
          <input
            type="text"
            className="form-control"
            name="cargo"
            id="cargo"
            value={form.cargo}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="">
        <button className="btn btn-primary">Enviar</button>
      </div>
    </form>
  );
};

export default GestionUsuariosForm;
