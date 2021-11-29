import { types } from '../helpers/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        loged_token: true,
      };
    case types.logout:
      return {
        loged_token: false,
      };

    default:
      return state;
  }
};
