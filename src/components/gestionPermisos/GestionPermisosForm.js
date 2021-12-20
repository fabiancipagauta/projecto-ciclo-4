import React from 'react';

const GestionPermisosForm = ({ openModal, data, setInfoPermiso }) => {
  const handleClick = (item) => {
    setInfoPermiso(item);
    openModal();
  };
  return (
    <div>
      <h3 className="text-start mb-5">Lista de permisos</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Tipo permiso</th>
            <th scope="col">Documento</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th>Estado</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id_usuario}>
              <td>{item.fecha_inicio}</td>
              <td>{item.tipo_permisos}</td>
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
                {/* {item.estado === 'pendiente' ? (
                  
                ) : item.estado === 'aprobado' ? (
                  <span className="text-success">Aprobado ✅</span>
                ) : (
                  <span className="text-danger">Rechazado ⛔</span>
                )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GestionPermisosForm;
