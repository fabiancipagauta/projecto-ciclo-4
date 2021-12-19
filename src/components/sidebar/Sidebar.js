import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import SidebarElement from './SidebarElement';
import AdminMenu from './AdminMenu';

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
        {(user.tipo_usuario === 1 || user.tipo_usuario === 2) && (
          <AdminMenu
            sectionName="Seccion Admin."
            icon={adminIcon}
            links={adminLinksElements}
            handleCollapse={handleCollapse}
            collapseRef={collapseRef}
          />
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
