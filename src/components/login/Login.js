import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../auth/authContext';
import useForm from '../../hooks/useForm';

import { AUTH_TYPES } from '../../types/authTypes';
import { __fetchLogin } from '../../helpers/__fetchLogin';

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
      let res = await __fetchLogin(form.email, form.password);

      let data = await res.json();

      if (data.status === 200) {
        const action = {
          type: AUTH_TYPES.LOGIN,
          payload: {
            nombre: data.data.nombre,
            apellido: data.data.apellido,
            id: data.data._id,
            token: data.token,
            email: data.data.email,
            tipo_usuario: data.data.tipo_usuario,
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
