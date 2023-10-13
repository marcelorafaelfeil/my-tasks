'use client';

import { newTask, stopCurrentTask } from '@/app/services/TrackService';
import { Button } from '@nextui-org/react';
import { useContext, useEffect } from 'react';
import { BsFillPlayFill, BsFillStopFill } from 'react-icons/bs';
import { TrackContext } from '../context/TrackContext';

export default function JobStartButton() {
  const context = useContext(TrackContext);
  const { state } = context;

  const handleStartTask = () => {
    context.startTask();
  };

  const handleStopTask = () => {
    context.stopTask();
    stopCurrentTask();
  };

  useEffect(() => {
    if (state.startTime && !state.id) {
      newTask(state.title, state.startTime!, (id: string) => {
        console.log('Task adicionada com sucesso!', id);
      });
    }
  }, [state.startTime, state.title, state.id]);

  return !state.id ? (
    <Button
      isIconOnly
      size="lg"
      color="success"
      variant="shadow"
      className={'text-xl text-white'}
      onClick={handleStartTask}
    >
      <BsFillPlayFill />
    </Button>
  ) : (
    <Button
      isIconOnly
      size="lg"
      color="danger"
      variant="shadow"
      className={'text-xl text-white'}
      onClick={handleStopTask}
    >
      <BsFillStopFill />
    </Button>
  );
}
