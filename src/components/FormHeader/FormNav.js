import React from 'react';

function FormNav({ current }) {
  return (
    <>
      <div className='form-nav'>
        <div
          className={`form-nav__item form-nav__item--first ${
            current === 'personal' && 'form-nav__item--active'
          }`}
        >
          <p>Personal Info</p>
          <span></span>
        </div>
        <div
          className={`form-nav__item form-nav__item--second ${
            current === 'billing' && 'form-nav__item--active'
          }`}
        >
          <p>Billing Info</p>
          <span></span>
        </div>
        <div
          className={`form-nav__item form-nav__item--third ${
            current === 'confirm' && 'form-nav__item--active'
          }`}
        >
          <p>Confirm Payment</p>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default FormNav;
