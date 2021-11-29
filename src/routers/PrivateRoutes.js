import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../auth/authContext';

export const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user.loged_token && user.token ? children : <Navigate to="/" />;
};
