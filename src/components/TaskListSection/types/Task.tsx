import { Project } from '../../Timer/Track/context/types/Project';

export type Task = {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  project?: Project;
};
