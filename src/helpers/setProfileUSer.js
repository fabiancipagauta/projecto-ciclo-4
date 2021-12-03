import { usuarios } from '../data/data_user';

export const setProfileUser = (user) => {
  console.log(user);

  let i = 0;

  for (let us of usuarios) {
    if (us.id === user.id) {
      usuarios[i] = user;
      return user;
    }
    i++;
  }
  return user;
};
