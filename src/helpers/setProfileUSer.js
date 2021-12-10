import env from '../constants/apiConst';

export const setProfileUser = (user) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }),
  };

  const data = fetch(env.__PROFILE, options)
    .then((res) => res)
    .then((res) => res.json());
  console.log(data);

  return data;
};
