import React, { useState } from 'react';
import FormLabel from '../FormLabel/FormLabel';

function CVVInput() {
  const [value, setValue] = useState('');

  return (
    <>
      <FormLabel label='CVV' htmlFor='cvv-input' required />
      <input
        type='number'
        value={value}
        onChange={(e) => {
          const { value } = e.target;
          if (value.length < 4) setValue(value);
        }}
        id='cvv-input'
        className='form__input form__input--default'
        required
      />
    </>
  );
}

export default CVVInput;
