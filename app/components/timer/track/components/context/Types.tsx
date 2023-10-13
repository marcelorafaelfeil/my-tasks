import { TrackActionsEnum } from './TrackActionsEnum';

export type TrackContextType = {
  state: TrackState;
  startTask: () => void;
  stopTask: () => void;
  defineTaskTitle: (title: string) => void;
};

export type TrackState = {
  id?: number;
  title?: string;
  startTime?: Date;
  endTime?: Date;
  status: 'idle' | 'ongoing' | 'finished';
};

export type TrackAction = {
  type: TrackActionsEnum;
  payload?: TrackState;
};
