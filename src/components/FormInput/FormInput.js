import React from 'react';

function FormInput({ type = 'text', id, required, width }) {
  return (
    <input
      type={type}
      id={id}
      className='form__input form__input--default'
      required={required}
    />
  );
}

export default FormInput;
