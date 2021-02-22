import React, { useState } from 'react';
import FormLabel from '../FormLabel/FormLabel';

function CardInput() {
  const [value, setValue] = useState('');
  const [newInput, setNewInput] = useState(true);

  const updateInput = (e) => {
    let { value } = e.target;
    let testValue = value.replace(/ /g, '');
    let lastPosition = value.length - 1;

    //remove space at string end when backspace is entered
    if (!(testValue.length % 4) && value[lastPosition] === ' ') {
      e.target.value = value.trim();
      setValue(value.trim());
      return;
    } else if (!newInput && testValue.length === 0) {
      e.target.value = '';
      setValue('');
      setNewInput(true);
      return;
    }

    if (/^\d+$/.test(testValue) && testValue.length < 17) {
      if (testValue.length % 4 === 1 && testValue.length > 1) {
        //insert space when first 4 numbers are complete
        let newValue = [
          value.slice(0, lastPosition),
          '   ',
          value.slice(lastPosition),
        ].join('');

        e.target.value = newValue;
        value = newValue;
      }
      setNewInput(false);
      setValue(value);
    }
  };

  return (
    <>
      <FormLabel label='Card details' htmlFor='card-input' required />
      <input
        value={value}
        onChange={(e) => updateInput(e)}
        id='card-input'
        className='form__input form__input--default'
        required
      />
    </>
  );
}

export default CardInput;
