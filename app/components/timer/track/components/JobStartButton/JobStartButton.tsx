'use client';

import { Button } from '@nextui-org/react';
import { useContext } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { TrackContext } from '../context/TrackContext';

export default function JobStartButton() {
  const context = useContext(TrackContext);

  const handleClick = () => {
    context.startTask();
  };

  return (
    <Button
      isIconOnly
      size="lg"
      color="success"
      variant="shadow"
      className={'text-xl text-white'}
      onClick={handleClick}
    >
      <BsFillPlayFill />
    </Button>
  );
}
