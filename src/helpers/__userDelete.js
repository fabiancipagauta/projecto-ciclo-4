import env from '../constants/apiConst';

export const __userDelete = async (body) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  let res = await fetch(env.__USER_DELETE, options);

  let json = await res.json();

  return json;
};
