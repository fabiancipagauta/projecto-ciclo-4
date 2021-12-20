import env from '../constants/apiConst';

export const __licenseEdit = async (body) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  let res = await fetch(env.__LICENSE_EDIT, options);

  let json = await res.json();

  return json;
};
