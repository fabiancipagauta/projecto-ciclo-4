import env from '../constants/apiConst';

export const __ListPayment = async (id) => {
  let options = {
    method: 'GET',
  };

  const data = await fetch(`${env.__LIST_PAYMENT}${id}`, options);

  let json = await data.json();

  return json;
};
