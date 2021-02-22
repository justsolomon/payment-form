import React from 'react';
import FormFooter from '../FormFooter/FormFooter';
import './ConfirmPayment.scss';

function ConfirmPayment({ submit }) {
  return (
    <>
      <div className='confirm-payment mb-4'>
        <div className='confirm-payment__header'>
          <p>Item Name</p>
          <div className='confirm-payment__header-price'>
            <svg
              width='26'
              height='18'
              viewBox='0 0 26 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M25.6304 8.19363V6.04733H23.294V0.714563H20.5146V6.04733H11.1973L5.21054 0.740855V0.714294H2.43115V6.04706H0.0947266V8.19336H2.43115V10.0714H0.0947266V12.2177H2.43115V17.4997H5.21054V12.218H14.5152L20.4968 17.5L20.5149 17.4952V17.5H23.2943V12.218H25.6307V10.0716H23.2943V8.19363H25.6304ZM5.21054 4.00136L7.52716 6.04733H5.21054V4.00136ZM5.21054 10.0716V8.19363H9.95809L12.0847 10.0716H5.21054ZM20.5146 14.3055L18.159 12.218H20.5146V14.3055ZM20.5146 10.0716H15.7375L13.6185 8.19363H20.5146V10.0716Z'
                fill='#F2F2F2'
              />
            </svg>

            <p>Price</p>
          </div>
        </div>
        <div className='confirm-payment__body'>
          <div className='confirm-payment__section'>
            <p className='confirm-payment__section-title'>
              Data science and usability
            </p>
            <p className='confirm-payment__section-price'>50,000.00</p>
          </div>
          <div className='confirm-payment__section'>
            <p className='confirm-payment__section-title'>Shipping</p>
            <p className='confirm-payment__section-price'>0.00</p>
          </div>
        </div>
        <p className='confirm-payment__border'></p>
        <div className='confirm-payment__footer'>
          <div className='confirm-payment__footer--wrapper'>
            <p className='confirm-payment__footer-total'>Total</p>
            <p className='confirm-payment__section-price'>50,000.00</p>
          </div>
        </div>
      </div>
      <FormFooter action='Pay' submit={submit} />
    </>
  );
}

export default ConfirmPayment;
