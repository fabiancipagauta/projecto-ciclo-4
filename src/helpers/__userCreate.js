import env from '../constants/apiConst';

export const __userCreate = async (_id) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(_id),
  };

  let res = await fetch(env.__USER_CREATE, options);

  let json = await res.json();

  return json;
};
