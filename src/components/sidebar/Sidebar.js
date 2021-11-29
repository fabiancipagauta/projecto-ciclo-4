import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import SidebarElement from './SidebarElement';

import { sidebarLinkElements, adminLinksElements } from '../../helpers/sidebarElements';
import '../../css/Navbar.css';

import { adminIcon } from '../../assets/img/images';
import { AuthContext } from '../../auth/authContext';

const Sidebar = () => {
  const collapseRef = useRef();

  const { user } = useContext(AuthContext);

  const handleCollapse = (e) => {
    collapseRef.current.classList.toggle('collapse-2');
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <Link to="/psn" className="sidebar-logo">
          LOGO
        </Link>
      </div>

      <hr className="sidebar-division" />

      <ul className="sidebar-menu">
        {sidebarLinkElements.map((element) => (
          <SidebarElement key={element.id} {...element} />
        ))}

        {/* Solo se debe mostrar si el empleado es admin o de nomina */}
        {(user.tipo_usuario === '1' || user.tipo_usuario === '2') && (
          <li className="sidebar-menu-element" data-type="btn-collapse" onClick={handleCollapse}>
            <span to="/psn" className="sidebar-menu-link">
              <img src={adminIcon.img} alt={adminIcon.title} className="sidebar-menu-icon" />
              <span className="sidebar-menu-title">Admin Section</span>
            </span>
            <ul className="sidebar-menu-element-collapse collapse-2" ref={collapseRef}>
              {adminLinksElements.map((element) => (
                <SidebarElement key={element.id} {...element} />
              ))}
            </ul>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
