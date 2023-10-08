import { TrackActionsEnum } from './TrackActionsEnum';

export type TrackContextType = {
  state: TrackState;
  startTask: () => void;
  defineTaskTitle: (title: string) => void;
};

export type TrackState = {
  title?: string;
  startTime?: Date;
  endTime?: Date;
};

export type TrackAction = {
  type: TrackActionsEnum;
  payload: TrackState;
};
