import { usuarios } from '../data/data_user';

export const getUser = (email, password) => {
  // console.log('get_usuario');

  let user = usuarios.filter((usuario) => usuario.email === email && usuario.password === password);

  user = { ...user[0] };

  if (user.hasOwnProperty('email')) {
    user.founded = true;
  } else {
    user.founded = false;
  }

  return user;
};
