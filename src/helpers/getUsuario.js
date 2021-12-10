import env from '../constants/apiConst';

/**
 * PETICION PARA INICIAR SESION
 */

export const getUser = async (email, password) => {
  let options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email: email, password: password }),
  };

  let data = fetch(env.__LOGIN, options).then((res) => res);

  return data;
};
