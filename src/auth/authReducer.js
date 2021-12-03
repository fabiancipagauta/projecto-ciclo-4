import { AUTH_TYPES } from '../types/authTypes';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_TYPES.LOGIN:
      return {
        ...action.payload,
        loged_token: true,
      };
    case AUTH_TYPES.LOGOUT:
      return {
        loged_token: false,
      };

    default:
      return state;
  }
};
