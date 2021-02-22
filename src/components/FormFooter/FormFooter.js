import React from 'react';

function FormFooter({ action = 'Next', submit }) {
  return (
    <div className='form__footer'>
      <button className='form__button form__button--solid' onClick={submit}>
        {action}
      </button>
      <button
        className='form__button form__button--outline'
        onClick={(e) => {
          e.preventDefault();
          window.location.reload();
        }}
      >
        Cancel Payment
      </button>
    </div>
  );
}

export default FormFooter;
