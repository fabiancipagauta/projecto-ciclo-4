import env from '../constants/apiConst';

/**
 * OBTENEMOS LA INFORMACION DEL USUARIO
 */

export const getProfileInfo = async (user) => {
  let options = {
    method: 'GET',
  };

  const data = await fetch(`${env.__PROFILE}${user}`, options);

  let json = await data.json();

  return json.user;
};
