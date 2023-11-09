import { Project } from '@/app/components/timer/track/components/context/types/Project';

export type Task = {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  project?: Project;
};
