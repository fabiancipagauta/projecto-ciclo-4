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

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      alert('Campos requeridos');
      return;
    }

    const user = getUser(form.email, form.password);
    // console.log(user);

    if (user.founded) {
      const action = {
        type: AUTH_TYPES.LOGIN,
        payload: {
          nombre: user.nombre,
          apellido: user.apellido,
          id: user.id,
          token: user.token,
          correo: user.correo,
          tipo_usuario: user.tipo_usuario,
        },
      };
      // console.log(action);
      dispatch(action);

      navigate('/psn', { replace: true });
    } else {
      alert('Correo o password incorrectos');
      return;
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
