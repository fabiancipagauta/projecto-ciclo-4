import React from 'react';

const GetionVacaciones = ({ data = [], openModal, setInfoVaciones }) => {
  const handleClick = (item) => {
    setInfoVaciones(item);
    openModal();
  };
  return (
    <>
      <h4 className="mb-4 text-start">Lista de vacaciones</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Documento</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Estado</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((item, ind) => (
              <tr key={`${item.id_vacaciones}`}>
                <td>{item.id_usuario}</td>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>
                  {item.estado === 'pendiente' ? (
                    <span>Pendiente ➖</span>
                  ) : item.estado === 'aprobado' ? (
                    <span className="text-success">Aprobado ✅</span>
                  ) : (
                    <span className="text-danger">Rechazado ⛔</span>
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => handleClick(item)}
                  >
                    Ver solicitud
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default GetionVacaciones;
