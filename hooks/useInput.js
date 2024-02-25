import { useState } from 'react';

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const onChangeText = (text) => {
    setValue(text);
    setError('');
  };

  return {
    value,
    onChangeText,
    clear: () => setValue(''), // Optional method to clear the input,
    error,
    setError
  };
};

export default useInput;
