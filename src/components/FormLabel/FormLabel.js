import React from 'react';
import './FormLabel.scss';

function FormLabel({ htmlFor, label, required }) {
  return (
    <label htmlFor={htmlFor} className='form-label'>
      {label}
      {required && <span className='form-label__required'>*</span>}
    </label>
  );
}

export default FormLabel;
