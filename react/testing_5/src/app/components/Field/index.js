import React from 'react';

import './styles.css';

function Field({ input, label, type, meta: { touched, error } }) {
  return (
    <div className="field-container">
      <span>{label}</span>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span className={`error error-${input.name}`}>{error}</span>}
    </div>
  );
}

export default Field;
