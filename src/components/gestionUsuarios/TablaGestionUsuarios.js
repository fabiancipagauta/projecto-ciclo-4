import React from 'react';

const TablaGestionUsuarios = ({ data, setDataEdit, deleteUser }) => {
  return (
    <table className="my-5 table table-hover">
      <thead>
        <tr>
          <th>Rol</th>
          <th>Documento</th>
          <th>Nombre(s)</th>
          <th>Apellidos(s)</th>
          <th>Correo</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {data || data?.length > 0 ? (
          data.map((item) => (
            <tr key={item._id}>
              <td>
                {item.tipo_usuario === 1
                  ? 'Admin'
                  : item.tipo_usuario === 2
                  ? 'Nómina'
                  : 'Empleado'}
              </td>
              <td>{item._id}</td>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>{item.email}</td>
              <td>
                <button className="btn btn-success me-1" onClick={(e) => setDataEdit(item)}>
                  Editar
                </button>
                <button className="btn btn-danger" onClick={(e) => deleteUser(item._id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>Sin datos</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TablaGestionUsuarios;
