import env from '../constants/apiConst';

/**
 * PETICION PARA INICIAR SESION
 */

export const __fetchLogin = async (email, password) => {
  let options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email: email, password: password }),
  };

  let data = await fetch(env.__LOGIN, options);

  return data;
};
