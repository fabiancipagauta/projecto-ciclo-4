import React from 'react';

const ProfileInfo = ({ tag = '', data }) => {
  return (
    <p className="user-info">
      <span className="user-info-tag">{tag}: </span>
      <span className="user-info-data">{data && data}</span>
    </p>
  );
};

export default ProfileInfo;
