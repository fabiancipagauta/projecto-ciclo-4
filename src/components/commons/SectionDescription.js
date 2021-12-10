import React from 'react';

const SectionDescription = ({ children }) => {
  return (
    <div className="p-3">
      <p className="text-start">{children}</p>
    </div>
  );
};

export default SectionDescription;
