import env from '../constants/apiConst';

export const __editProfile = (id, address, phone) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ _id: id, address, phone }),
  };

  const data = fetch(env.__PROFILE_EDIT, options).then((res) => res);

  return data;
};
