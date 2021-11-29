import React, { useRef } from 'react';

import { headerImg } from '../../helpers/headerElements';
import '../../css/Header.css';

const Header = () => {
  const { btnExit, btnMenu, userImg } = headerImg;
  const headerRef = useRef();

  const handleSidebar = (e) => {
    console.log('click');
    document.querySelector('.sidebar').classList.toggle('show');
    document.querySelector('.psn-main').classList.toggle('show');
    headerRef.current.classList.toggle('show');
  };

  return (
    <header ref={headerRef}>
      <div className="header-left">
        <img
          src={btnMenu.img}
          alt={btnMenu.title}
          className="btn-hamburger"
          onClick={handleSidebar}
        />
      </div>

      <div className="header-right">
        <div className="header-user">
          <img src={userImg.img} alt={userImg.title} />
          <span>Nombre Apellido</span>
        </div>
        <div className="header-logout">
          <span>
            <img src={btnExit.img} alt={btnExit.title} className="btn-logout" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
