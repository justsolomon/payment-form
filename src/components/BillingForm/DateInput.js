import React, { useState } from 'react';
import FormLabel from '../FormLabel/FormLabel';

function DateInput() {
  const [value, setValue] = useState('');
  const [newInput, setNewInput] = useState(true);

  const updateDate = (e) => {
    let { value } = e.target;
    let testValue = value.replace(/\s+|[,\/]/g, '');

    //remove space at string end when backspace is entered
    let slashPresent =
      value[value.length - 1] === ' ' || value[value.length - 1] === '/';
    if (!(testValue.length % 2) && slashPresent) {
      e.target.value = testValue;
      setValue(testValue);
      return;
    } else if (!newInput && testValue.length === 0) {
      e.target.value = '';
      setValue('');
      setNewInput(true);
      return;
    }

    if (/^\d+$/.test(testValue) && testValue.length < 5) {
      if (!(testValue.length % 2) && testValue.length !== 4) {
        e.target.value += ' / ';
        value += ' / ';
      }
      setNewInput(false);
      setValue(value);
    }
  };

  return (
    <>
      <FormLabel label='Expiry date' htmlFor='expiry-date' required />
      <input
        value={value}
        onChange={(e) => {
          updateDate(e);
        }}
        id='expiry-date'
        placeholder='MM / YY'
        className='form__input form__input--default'
        required
      />
    </>
  );
}

export default DateInput;
