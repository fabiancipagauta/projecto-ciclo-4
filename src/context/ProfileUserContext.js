import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../auth/authContext';
import { getProfileInfo } from '../helpers/getProfileInfo';
import { setProfileUser } from '../helpers/setProfileUSer';

export const ProfileUserContext = createContext();

export const ProfileUserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const { user } = useContext(AuthContext);

  let getInfo = useMemo(() => getProfileInfo(user.id), [user.id]);

  useEffect(() => {
    setUserInfo(getInfo);
  }, []);

  const editUser = (userEdit) => {
    //console.log(userEdit);
    let newUSer = setProfileUser(userEdit);
    setUserInfo(newUSer);
  };

  const data = { userInfo, editUser };

  return <ProfileUserContext.Provider value={data}>{children}</ProfileUserContext.Provider>;
};
