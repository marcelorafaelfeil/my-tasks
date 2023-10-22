import { Project } from './Project';
import { TaskStatus } from './TaskStatus';

export type Task = {
  id?: number;
  title?: string;
  startTime?: Date;
  endTime?: Date;
  project?: Project;
  status: TaskStatus;
};
