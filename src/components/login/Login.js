import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../auth/authContext';
import useForm from '../../hooks/useForm';

import { getUser } from '../../helpers/getUsuario';
import { AUTH_TYPES } from '../../types/authTypes';

const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const [form, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      alert('Campos requeridos');
      return;
    }

    //Hacemos la peticion
    try {
      let res = await getUser(form.email, form.password);

      let data = await res.json();
      // console.log(data);

      if (data.user) {
        const action = {
          type: AUTH_TYPES.LOGIN,
          payload: {
            nombre: data.user.nombre,
            apellido: data.user.apellido,
            id: data.user.id,
            token: data.user.token,
            email: data.user.email,
            tipo_usuario: data.user.tipo_usuario,
          },
        };
        // console.log(action);
        dispatch(action);

        navigate('/psn', { replace: true });
      } else {
        alert(data.msg);
        return;
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="row">
      <form
        action=""
        // onSubmit={handleSubmit}
        className="col-sm-10 col-md-6 mx-auto p-4 shadow rounded form-login"
        onSubmit={handleLogin}
      >
        <h2 className="mb-4 text-center">Iniciar sesión</h2>

        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-12">
            <div className="input-group">
              <div className="input-group-text">📧</div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange}
                value={form.email}
                className="form-control"
                placeholder="Ingrese su Correo"
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-12">
            <div className="input-group">
              <div className="input-group-text">🔐</div>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleInputChange}
                value={form.password}
                className="form-control"
                placeholder="Ingrese su Contraseña"
              />
            </div>
          </div>
        </div>
        <div>
          <input type="submit" value="Iniciar sesión" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default Login;
