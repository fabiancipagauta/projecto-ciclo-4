import env from '../constants/apiConst';

export const editUserApi = (id, address, phone) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, address, phone }),
  };

  const data = fetch(env.__PROFILE_EDIT, options).then((res) => res);

  return data;
};
