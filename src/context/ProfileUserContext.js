import { createContext, useState } from 'react';

export const ProfileUserContext = createContext();
/**
 * Este contexto servira para obtener la informacion del usuario en la aplicacion
 */

export const ProfileUserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const data = { userInfo, setUserInfo };

  return <ProfileUserContext.Provider value={data}>{children}</ProfileUserContext.Provider>;
};
