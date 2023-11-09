import { Task } from './Task';

export type GroupedTasks = {
  key: string | number;
  date: Date;
  items: Task[];
};
