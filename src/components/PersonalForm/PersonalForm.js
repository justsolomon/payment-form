import React from 'react';
import FormFooter from '../FormFooter/FormFooter';
import FormInput from '../FormInput/FormInput';
import FormLabel from '../FormLabel/FormLabel';
import SelectInput from '../SelectInput/SelectInput';
import states from './states.json';

function PersonalForm({ submit }) {
  return (
    <form
      className='form'
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <div className='mb-4'>
        <FormLabel label='Name' htmlFor='name' />
        <FormInput id='name' />
      </div>
      <div className='mb-4'>
        <FormLabel label='Email Address' htmlFor='email' required />
        <p className='form__helper-text'>
          The purchase reciept would be sent to this address
        </p>
        <FormInput type='email' id='email' required />
      </div>
      <div className='mb-4'>
        <FormLabel label='Address 1' htmlFor='first-address' />
        <FormInput id='first-address' />
      </div>
      <div className='mb-4'>
        <FormLabel label='Address 2' htmlFor='second-address' />
        <FormInput id='second-address' />
      </div>

      <div className='form__section mb-4'>
        <div style={{ width: '60%' }}>
          <FormLabel label='Local Government' htmlFor='local-govt' />
          <FormInput id='local-govt' />
        </div>
        <div style={{ width: '35%' }}>
          <FormLabel label='State' htmlFor='state' />
          <SelectInput data={states} />
        </div>
      </div>
      <FormFooter />
    </form>
  );
}

export default PersonalForm;
