import { createContext, useEffect, useReducer } from 'react';
import { useCurrentTask } from '../../hooks/useCurrentTask';
import { TrackActionsEnum } from './TrackActionsEnum';
import { trackReducer } from './TrackReducer';
import { TrackContextType, TrackState } from './Types';

type AppTrackContextProps = {
  children: React.ReactNode;
};

export const TrackContext = createContext<TrackContextType>(
  {} as TrackContextType,
);

export const AppTrackContext = (props: AppTrackContextProps) => {
  const [state, dispatch] = useReducer(trackReducer, {} as TrackState);
  const currentTask = useCurrentTask();

  const startTask = () => {
    dispatch({
      payload: {
        startTime: new Date(),
      } as TrackState,
      type: TrackActionsEnum.START,
    });
  };

  const stopTask = () => {
    dispatch({
      type: TrackActionsEnum.STOP,
    });
  };

  const defineTaskTitle = (title: string) => {
    dispatch({
      payload: {
        title: title,
      } as TrackState,
      type: TrackActionsEnum.DEFINE_TITLE,
    });
  };

  useEffect(() => {
    if (currentTask) {
      dispatch({
        payload: {
          id: currentTask?.id,
          title: currentTask?.title,
          status: currentTask?.status,
          startTime: currentTask?.startDate,
        } as TrackState,
        type: TrackActionsEnum.RESCUE_TASK,
      });
    }
  }, [currentTask]);

  return (
    <TrackContext.Provider
      value={{ state, startTask, stopTask, defineTaskTitle }}
    >
      {props.children}
    </TrackContext.Provider>
  );
};
