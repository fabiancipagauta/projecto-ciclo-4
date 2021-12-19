import React from 'react';
import useForm from '../../hooks/useForm';

export const BtnGestiosUsuario = ({ setDataEdit }) => {
  const [form, handleInputChange] = useForm({
    search_user: '',
  });

  return (
    <div className="row my-3">
      <div className="col-4">
        <button className="btn btn-primary w-100" onClick={(e) => setDataEdit(null)}>
          Registrar Usuario
        </button>
      </div>

      <div className="col-4"></div>

      <div className="col-4">
        <form action="">
          <input
            type="text"
            placeholder="Buscar 🔍"
            className=" w-100"
            name="search_user"
            value={form.search_user}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
};
