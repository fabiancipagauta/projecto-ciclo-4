import data_user from '../data/data_user.json';

export const getProfileInfo = (id) => {
  let user = data_user.usuarios.find((u) => u.id === id);

  console.log(user);

  if (!user) {
    return {};
  } else {
    return user;
  }
};
