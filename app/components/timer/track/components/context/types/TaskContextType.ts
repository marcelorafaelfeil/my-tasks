import { Project } from './Project';
import { Task } from './Task';

export type TaskContextType = {
  state: Task;
  startTask: () => void;
  stopTask: () => void;
  defineTaskTitle: (title: string) => void;
  defineTaskProject: (project: Project) => void;
};
