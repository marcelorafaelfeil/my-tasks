'use client';

import { Input } from '@nextui-org/react';
import { useContext, useState } from 'react';
import { TrackContext } from '../context/TrackContext';

export default function TrackField() {
  const [value, setValue] = useState('');
  const context = useContext(TrackContext);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    context.defineTaskTitle(event.target.value);
    setValue(event.target.value);
  };

  return (
    <Input
      size={'lg'}
      type={'text'}
      value={value}
      onChange={handleInput}
      placeholder="What are you workig on?"
    />
  );
}
