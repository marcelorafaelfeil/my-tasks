'use client';

import { Input } from '@nextui-org/react';

type TrackFieldProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export default function TrackField(props: TrackFieldProps) {
  return (
    <Input
      size={'lg'}
      type={'text'}
      value={props.value}
      onChange={(input) => {
        props.onChange && props.onChange(input.target.value);
      }}
      placeholder="What are you workig on?"
    />
  );
}
