'use client';

import { updateTitle } from '@/app/services/TrackService';
import { Input } from '@nextui-org/react';
import { useContext, useEffect, useState } from 'react';
import { TrackContext } from '../context/TrackContext';

export default function TitleField() {
  const [value, setValue] = useState('');
  const context = useContext(TrackContext);
  const { state } = context;

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    context.defineTaskTitle(event.target.value);
    setValue(event.target.value);

    if (state.id) {
      updateTitle(state.id, event.target.value);
    }
  };

  useEffect(() => {
    if (state.title) {
      setValue(state.title || '');
    } else {
      setValue('');
    }
  }, [state.title]);

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
