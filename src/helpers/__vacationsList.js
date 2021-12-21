import env from '../constants/apiConst';

export const __vacationsList = async () => {
  let res = await fetch(env.__VACATIONS_LIST);

  let json = await res.json();

  return json;
};
