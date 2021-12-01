import React, { useContext } from 'react';
import { profileUser } from '../../assets/img/images';
import { AuthContext } from '../../auth/authContext';
import '../../css/Profile.css';
import ProfileInfo from './ProfileInfo';

const Profile = ({ setShowEdit }) => {
  const { user } = useContext(AuthContext);

  // const userData = [user.id, user.nombre, user.apellido, user.email, user.direccion, user.telefono];

  return (
    <section className="profile-section row">
      <div className="col-12 col-sm-6">
        <div className="profile-img">
          <img src={profileUser.img} alt={profileUser.title} />
        </div>
      </div>

      <div className="profile-info col-12 col-sm-6 mt-3 mt-sm-0">
        <h4>Mi información</h4>
        <ProfileInfo tag="Documento" data={user.id} />
        <ProfileInfo tag="Nombre(s)" data={user.nombre} />
        <ProfileInfo tag="Apellido(s)" data={user.apellido} />
        <ProfileInfo tag="Email" data={user.email} />
        <ProfileInfo tag="Dirección" data={user.direccion} />
        <ProfileInfo tag="Teléfono" data={user.telefono} />
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
