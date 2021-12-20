import env from '../constants/apiConst';

export const __createPayment = async (body) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  let res = await fetch(env.__CREATE_PAYMENT, options);

  let json = await res.json();

  return json;
};
