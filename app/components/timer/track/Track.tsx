'use client';

import { useState } from 'react';
import JobStartButton from './components/JobStartButton';
import TrackField from './components/TrackField';

type TrackProps = {
  onStart?: (taskDescription: string) => void;
};

export default function Track(props: TrackProps) {
  const [taskDescription, setTaskDescription] = useState('');

  const handleStart = () => {
    if (props.onStart) {
      props.onStart(taskDescription);
    }
  };

  return (
    <>
      <div className="flex gap-3">
        <TrackField
          value={taskDescription}
          onChange={(value) => setTaskDescription(value)}
        />
        <JobStartButton onStart={handleStart} />
      </div>
    </>
  );
}
