import React from 'react';
import SidebarElement from './SidebarElement';

const AdminMenu = ({ sectionName, icon, links, handleCollapse, collapseRef }) => {
  return (
    <li className="sidebar-menu-element" data-type="btn-collapse" onClick={handleCollapse}>
      <span to="/psn" className="sidebar-menu-link">
        <img src={icon.img} alt={icon.title} className="sidebar-menu-icon" />
        <span className="sidebar-menu-title">{sectionName}</span>
      </span>
      <ul className="sidebar-menu-element-collapse collapse-2" ref={collapseRef}>
        {links.map((element) => (
          <SidebarElement key={element.id} {...element} />
        ))}
      </ul>
    </li>
  );
};

export default AdminMenu;
