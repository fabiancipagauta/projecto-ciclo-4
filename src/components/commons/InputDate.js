import React from 'react';

const InputDate = ({ inputName, inputId, inputLabel, inputClass, value, onChange }) => {
  return (
    <div>
      <label htmlFor={inputId}>{inputLabel}</label>
      <input
        type="date"
        name={inputName}
        id={inputId}
        className={inputClass + ''}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputDate;
