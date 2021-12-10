import { createContext, useEffect, useReducer } from 'react';
import { authReducer } from './authReducer';

export const AuthContext = createContext();

const init = () => JSON.parse(localStorage.getItem('user_psn')) || { logged: false };

export const AuthoProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, '', init);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem('user_psn', JSON.stringify(user));
  }, [user]);

  const data = { user, dispatch };

  return <AuthContext.Provider value={data}> {children} </AuthContext.Provider>;
};
