import env from '../constants/apiConst';

export const __usersId = async () => {
  let res = await fetch(env.__USERS_ID);

  let json = await res.json();

  return json;
};
