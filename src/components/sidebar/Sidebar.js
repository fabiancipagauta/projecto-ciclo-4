import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import SidebarElement from './SidebarElement';

import { sidebarLinkElements } from '../../helpers/sidebarElements';
import '../../css/Navbar.css';

import { adminIcon } from '../../assets/img/images';

const Sidebar = () => {
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
        <li className="sidebar-menu-element">
          <span to="/psn" className="sidebar-menu-link">
            <img src={adminIcon.img} alt={adminIcon.title} className="sidebar-menu-icon" />
            <span className="sidebar-menu-title">Admin Section</span>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
