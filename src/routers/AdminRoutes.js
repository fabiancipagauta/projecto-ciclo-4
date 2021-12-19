import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../auth/authContext';

export const AdminRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user.loged_token && user.token && (user.tipo_usuario === 1 || user.tipo_usuario === 2) ? (
    children
  ) : (
    <Navigate to="/" />
  );
};
