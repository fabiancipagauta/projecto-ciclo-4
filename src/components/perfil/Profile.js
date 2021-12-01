import React, { useContext } from 'react';
import { profileUser } from '../../assets/img/images';
import { ProfileUserContext } from '../../context/ProfileUserContext';
import '../../css/Profile.css';
import ProfileInfo from './ProfileInfo';

const Profile = ({ setShowEdit }) => {
  const { userInfo } = useContext(ProfileUserContext);

  return (
    <section className="profile-section row">
      <div className="col-12 col-sm-6">
        <div className="profile-img">
          <img src={profileUser.img} alt={profileUser.title} />
        </div>
      </div>

      <div className="profile-info col-12 col-sm-6 mt-3 mt-sm-0">
        <h4>Mi información</h4>
        <ProfileInfo tag="Documento" data={userInfo.id} />
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
