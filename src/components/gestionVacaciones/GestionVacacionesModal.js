import React from 'react';

const GestionVacacionesModal = ({ data, editVacationOk, editVacationBad }) => {
  const handleClickOk = (e) => {
    const body = {
      id_vacaciones: data.id_vacaciones,
      estado: 'aprobado',
    };
    editVacationOk(body);
  };

  const handleClickBAD = (e) => {
    const body = {
      id_vacaciones: data.id_vacaciones,
      estado: 'rechazado',
    };
    editVacationBad(body);
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Fecha inicio</th>
            <th scope="col">Fecha fin</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Documento</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{data.fecha_inicio}</td>
            <td>{data.fecha_fin}</td>
            <td>{data.nombre}</td>
            <td>{data.apellido}</td>
            <td>{data.id_usuario}</td>
          </tr>
        </tbody>
      </table>
      <div>
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

export default GestionVacacionesModal;
