import env from '../constants/apiConst';

export const __requestPayment = async (id, date) => {
  let options = {
    method: 'GET',
  };

  const data = await fetch(`${env.__REQUEST_PAYMENT}${id}/${date}`, options);

  let json = await data.json();

  return json;
};
