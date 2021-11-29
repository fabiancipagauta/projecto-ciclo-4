import React from 'react';

import '../../css/HeaderContainer.css';

const HeaderMain = ({ sectionTitle, children }) => {
  return (
    <div className="header-main">
      <h1 className="section-title">{sectionTitle}</h1>
      {children && <div className="optional-section"> {children} </div>}
    </div>
  );
};

export default HeaderMain;
