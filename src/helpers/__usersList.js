import env from '../constants/apiConst';

export const __userList = async () => {
  let res = await fetch(env.__USER_LIST);

  let json = await res.json();

  return json;
};
