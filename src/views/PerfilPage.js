import React, { useState } from 'react';

import HeaderMain from '../components/container/HeaderMain';
import MainContainer from '../components/container/MainContainer';
import Profile from '../components/perfil/Profile';
import ProfileEditForm from '../components/perfil/ProfileEditForm';

const PerfilPage = () => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div>
      <HeaderMain sectionTitle="Mi Perfil">
        <h4>Botones opcionales</h4>
      </HeaderMain>
      <MainContainer>
        <Profile setShowEdit={setShowEdit} />
        {showEdit && <ProfileEditForm setShowEdit={setShowEdit} />}
      </MainContainer>
    </div>
  );
};

export default PerfilPage;
