import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../auth/authContext';
import { useNavigate } from 'react-router';

import { types } from '../../helpers/types';
import { headerImg } from '../../helpers/headerElements';
import '../../css/Header.css';

const Header = () => {
  const headerRef = useRef();
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  //onsole.log(navigate);

  const { btnExit, btnMenu, userImg } = headerImg;

  const handleSidebar = (e) => {
    console.log('click');
    document.querySelector('.sidebar').classList.toggle('show');
    document.querySelector('.psn-main').classList.toggle('show');
    headerRef.current.classList.toggle('show');
  };

  const handleLogout = (e) => {
    const action = {
      type: types.logout,
    };

    dispatch(action);
    //me envia al login y no puedo regresar a la pantalla anterior
    navigate('/', { replace: true });
  };

  return (
    <header ref={headerRef}>
      <div className="header-left">
        <img
          src={btnMenu.img}
          alt={btnMenu.title}
          className="btn-hamburger"
          onClick={handleSidebar}
          title="Menu"
        />
      </div>

      <div className="header-right">
        <div className="header-user">
          <img src={userImg.img} alt={userImg.title} />
          <span>
            {user.nombre} {user.apellido}
          </span>
        </div>
        <div className="header-logout">
          <img
            src={btnExit.img}
            alt={btnExit.title}
            className="btn-logout"
            onClick={handleLogout}
            title="Cerrar Sesión"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
