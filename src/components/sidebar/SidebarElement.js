import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarElement = ({ img, title, path }) => {
  return (
    <li className="sidebar-menu-element">
      <NavLink to={path} className="sidebar-menu-link">
        <img src={img.img} alt={img.title} className="sidebar-menu-icon" title={title} />
        <span className="sidebar-menu-title">{title}</span>
      </NavLink>
    </li>
  );
};

export default SidebarElement;
