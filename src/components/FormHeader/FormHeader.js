import React from 'react';
import FormNav from './FormNav';
import './FormHeader.scss';

function FormHeader({ current }) {
  return (
    <div className='form-header'>
      <h1 className='form-header__text'>Complete your Purchase</h1>
      <FormNav current={current} />
    </div>
  );
}

export default FormHeader;
