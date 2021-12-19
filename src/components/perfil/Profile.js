import React, { useContext, useEffect } from 'react';
import { profileUser } from '../../assets/img/images';
import { AuthContext } from '../../auth/authContext';
import { ProfileUserContext } from '../../context/ProfileUserContext';
import '../../css/Profile.css';
import { __ProfileInfo } from '../../helpers/__ProfileInfo';
import ProfileInfo from './ProfileInfo';

const Profile = ({ setShowEdit }) => {
  const { userInfo, setUserInfo } = useContext(ProfileUserContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      let resp = await __ProfileInfo(user.email);
      console.log(resp);
      setUserInfo(resp.data);
    };
    fetchProfile();
  }, []);

  return (
    <section className="profile-section row">
      <div className="col-12 col-sm-6">
        <div className="profile-img">
          <img src={profileUser.img} alt={profileUser.title} />
        </div>
      </div>

      <div className="profile-info col-12 col-sm-6 mt-3 mt-sm-0">
        <h4>Mi información</h4>
        <ProfileInfo tag="Documento" data={userInfo._id} />
        <ProfileInfo tag="Nombre(s)" data={userInfo.nombre} />
        <ProfileInfo tag="Apellido(s)" data={userInfo.apellido} />
        <ProfileInfo tag="Email" data={userInfo.email} />
        <ProfileInfo tag="Dirección" data={userInfo.direccion} />
        <ProfileInfo tag="Teléfono" data={userInfo.telefono} />
        <button
          className="btn btn-outline-primary btn-edit-profile"
          onClick={(e) => setShowEdit(true)}
        >
          Editar
        </button>
      </div>
    </section>
  );
};

export default Profile;
