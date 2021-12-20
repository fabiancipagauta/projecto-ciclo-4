import env from '../constants/apiConst';

/**
 * OBTENEMOS LA INFORMACION DEL USUARIO
 */

export const __userJobCertificate = async (user) => {
  const data = await fetch(`${env.__USER_JOB_CERTIFICATE}/${user}`);

  let json = await data.json();

  return json;
};
