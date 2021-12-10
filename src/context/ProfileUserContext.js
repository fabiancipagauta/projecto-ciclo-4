import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../auth/authContext';
import { getProfileInfo } from '../helpers/getProfileInfo';

export const ProfileUserContext = createContext();
/**
 * Este contexto servira para obtener la informacion del usuario en la aplicacion
 */

export const ProfileUserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const { user } = useContext(AuthContext);

  let getInfo = useMemo(async () => await getProfileInfo(user.email), [user.email]);

  useEffect(() => {
    const set = async () => {
      setUserInfo(await getInfo);
    };
    set();
  }, []);

  const data = { userInfo };

  return <ProfileUserContext.Provider value={data}>{children}</ProfileUserContext.Provider>;
};
