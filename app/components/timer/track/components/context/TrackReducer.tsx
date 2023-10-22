import { TaskActionsEnum } from './TaskActionsEnum';
import { Task } from './types/Task';
import { TaskAction } from './types/TaskAction';
import { TaskStatus } from './types/TaskStatus';

export const trackReducer = (state: Task, action: TaskAction): Task => {
  switch (action.type) {
    case TaskActionsEnum.DEFINE_TITLE:
      return { ...state, title: action.payload?.title };
    case TaskActionsEnum.DEFINE_PROJECT:
      return { ...state, project: action.payload?.project };
    case TaskActionsEnum.START: {
      return {
        ...state,
        startTime: action.payload?.startTime,
        status: TaskStatus.ONGOING,
      };
    }
    case TaskActionsEnum.STOP: {
      return { status: TaskStatus.IDLE } as Task;
    }
    case TaskActionsEnum.RESCUE_TASK: {
      return { ...state, ...action.payload };
    }
    default:
      return { ...state };
  }
};
