'use client';

import { Button } from '@nextui-org/react';
import { BsFillPlayFill } from 'react-icons/bs';

type JobStartButtonProps = {
  onStart: () => void;
};

export default function JobStartButton(props: JobStartButtonProps) {
  return (
    <Button
      isIconOnly
      size="lg"
      color="success"
      variant="shadow"
      className={'text-xl text-white'}
      onClick={props.onStart}
    >
      <BsFillPlayFill />
    </Button>
  );
}
