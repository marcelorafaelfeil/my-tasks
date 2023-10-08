import { createContext, useReducer } from 'react';
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

  const startTask = () => {
    dispatch({
      payload: {
        startTime: new Date(),
      },
      type: TrackActionsEnum.START,
    });
  };

  const defineTaskTitle = (title: string) => {
    dispatch({
      payload: {
        title: title,
      },
      type: TrackActionsEnum.DEFINE_TITLE,
    });
  };

  return (
    <TrackContext.Provider value={{ state, startTask, defineTaskTitle }}>
      {props.children}
    </TrackContext.Provider>
  );
};
