import env from '../constants/apiConst';

export const __lincenseList = async () => {
  let res = await fetch(env.__LICENSE_LIST);

  let json = await res.json();

  return json;
};
