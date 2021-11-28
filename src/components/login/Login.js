import React from 'react';

export const Login = () => {
  return (
    <div className="row">
      <form
        action=""
        // onSubmit={handleSubmit}
        className="col-sm-10 col-md-6 mx-auto p-4 shadow rounded"
      >
        <h2 className="mb-4 text-center">Iniciar sesión</h2>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-12">
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input
                type="email"
                name="email"
                id="email"
                // onChange={handleInputChange}
                // value={form.email}
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
            <input
              type="password"
              name="password"
              id="password"
              // onChange={handleInputChange}
              // value={form.password}
              className="form-control"
              placeholder="Ingrese su Contraseña"
            />
          </div>
        </div>

        <div>
          <input type="submit" value="Iniciar sesión" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};
