'use client';

import { Button } from '@nextui-org/react';
import { BsFillPlayFill } from 'react-icons/bs';

export default function JobStartButton() {
  return (
    <Button
      isIconOnly
      size="lg"
      color="success"
      variant="shadow"
      className={'text-xl text-white'}
    >
      <BsFillPlayFill />
    </Button>
  );
}
