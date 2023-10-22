import { createContext, useEffect, useReducer } from 'react';
import { useCurrentTask } from '../../hooks/useCurrentTask';
import { TaskActionsEnum } from './TaskActionsEnum';
import { trackReducer } from './TrackReducer';
import { Project } from './types/Project';
import { Task } from './types/Task';
import { TaskContextType } from './types/TaskContextType';

type AppTrackContextProps = {
  children: React.ReactNode;
};

export const TrackContext = createContext<TaskContextType>(
  {} as TaskContextType,
);

export const AppTrackContext = (props: AppTrackContextProps) => {
  const [state, dispatch] = useReducer(trackReducer, {} as Task);
  const currentTask = useCurrentTask();

  const startTask = () => {
    dispatch({
      payload: {
        startTime: new Date(),
      } as Task,
      type: TaskActionsEnum.START,
    });
  };

  const stopTask = () => {
    dispatch({
      type: TaskActionsEnum.STOP,
    });
  };

  const defineTaskTitle = (title: string) => {
    dispatch({
      payload: {
        title: title,
      } as Task,
      type: TaskActionsEnum.DEFINE_TITLE,
    });
  };

  const defineTaskProject = (project: Project) => {
    dispatch({
      payload: {
        project,
      } as Task,
      type: TaskActionsEnum.DEFINE_PROJECT,
    });
  };

  useEffect(() => {
    if (currentTask) {
      dispatch({
        payload: currentTask,
        type: TaskActionsEnum.RESCUE_TASK,
      });
    }
  }, [currentTask]);

  return (
    <TrackContext.Provider
      value={{ state, startTask, stopTask, defineTaskTitle, defineTaskProject }}
    >
      {props.children}
    </TrackContext.Provider>
  );
};
