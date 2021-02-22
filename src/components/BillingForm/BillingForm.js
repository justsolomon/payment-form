import React from 'react';
import FormFooter from '../FormFooter/FormFooter';
import FormInput from '../FormInput/FormInput';
import FormLabel from '../FormLabel/FormLabel';
import SelectInput from '../SelectInput/SelectInput';
import CardInput from './CardInput';
import CVVInput from './CVVInput';
import DateInput from './DateInput';

function BillingForm({ submit }) {
  return (
    <form
      className='form'
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <div className='mb-4'>
        <FormLabel label='Name on Card' htmlFor='card-name' required />
        <FormInput id='card-name' required />
      </div>
      <div className='mb-4'>
        <FormLabel label='Card Type' htmlFor='card' required />
        <SelectInput data={['Visa', 'Mastercard']} required />
      </div>
      <div className='form__section mb-4'>
        <div className='w-55'>
          <CardInput />
        </div>
        <div className='w-23'>
          <DateInput />
        </div>
        <div className='w-12'>
          <CVVInput />
        </div>
      </div>
      <FormFooter />
    </form>
  );
}

export default BillingForm;
