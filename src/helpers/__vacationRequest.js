import env from '../constants/apiConst';

export const __vacationRequest = async (body) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  let res = await fetch(env.__VACATIONS_REQUEST, options);

  let json = await res.json();
  console.log(json);
  return json;
};
