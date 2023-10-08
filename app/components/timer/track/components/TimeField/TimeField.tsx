import { Input } from '@nextui-org/react';
import { useState } from 'react';

export const TimeField = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      size={'lg'}
      type={'text'}
      value={value}
      className="w-100"
      style={{ textAlign: 'center' }}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      placeholder="00:00:00"
    />
  );
};
