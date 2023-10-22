import { TaskActionsEnum } from '../TaskActionsEnum';
import { Task } from './Task';

export type TaskAction = {
  type: TaskActionsEnum;
  payload?: Task;
};
