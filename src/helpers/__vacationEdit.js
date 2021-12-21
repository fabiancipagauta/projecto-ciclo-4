import env from '../constants/apiConst';

export const __vacationEdit = async (body) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  let res = await fetch(env.__VACATIONS_EDIT, options);

  let json = await res.json();

  return json;
};
