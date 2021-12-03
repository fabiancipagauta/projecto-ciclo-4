import { usuarios } from '../data/data_user';

export const getProfileInfo = (id) => {
  let user = usuarios.find((u) => u.id === id);

  console.log(user);

  if (!user) {
    return {};
  } else {
    return user;
  }
};
