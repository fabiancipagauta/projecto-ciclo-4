import React from 'react';
import useForm from '../../hooks/useForm';

const GestionPermisosModal = ({ data, editLicenseOk, editLicenseBad }) => {
  const initialForm = {
    comentarios: '',
  };
  const [form, handleInputChange] = useForm(initialForm);

  const handleClickOk = (e) => {
    const body = {
      id_permisos: data.id_permisos,
      comentarios: form.comentarios,
      estado: 'aprobado',
    };
    editLicenseOk(body);
  };

  const handleClickBAD = (e) => {
    const body = {
      id_permisos: data.id_permisos,
      comentarios: form.comentarios,
      estado: 'rechazado',
    };
    editLicenseBad(body);
  };

  return (
    <>
      <table className="table my-3">
        <thead>
          <tr>
            <th scope="col">Tipo de permiso</th>
            <th scope="col">Fecha de inicio</th>
            <th scope="col">Fecha fin</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Documento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.tipo_permisos ? data.tipo_permisos : ''}</td>
            <td>{data.fecha_inicio ? data.fecha_inicio : ''}</td>
            <td>{data.fecha_fin ? data.fecha_fin : ''}</td>
            <td>{data.nombre ? data.nombre : ''}</td>
            <td>{data.apellido ? data.apellido : ''}</td>
            <td>{data.id_usuario ? data.id_usuario : ''}</td>
          </tr>
        </tbody>
      </table>

      <div className="form-floating">
        <form action="">
          <label htmlFor="">Comentarios:</label>
          <textarea
            className="form-control"
            placeholder="cometarios"
            id=""
            name="comentarios"
            value={data.comentarios ? data.comentarios : form.comentarios}
            onChange={handleInputChange}
          ></textarea>
        </form>
      </div>

      <div className="my-3">
        {data.estado === 'pendiente' ? (
          <>
            <button type="button" className="btn btn-danger me-3" onClick={handleClickBAD}>
              Rechazar
            </button>
            <button type="button" className="btn btn-success" onClick={handleClickOk}>
              Aprobar
            </button>
          </>
        ) : data.estado === 'aprobado' ? (
          <span className="text-success">Aprobado ✅</span>
        ) : (
          <span className="text-danger">Rechazado ⛔</span>
        )}
      </div>
    </>
  );
};

export default GestionPermisosModal;
