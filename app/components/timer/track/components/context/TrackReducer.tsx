import { TrackActionsEnum } from './TrackActionsEnum';
import { TrackAction, TrackState } from './Types';

export const trackReducer = (state: TrackState, action: TrackAction) => {
  switch (action.type) {
    case TrackActionsEnum.DEFINE_TITLE:
      return { ...state, title: action.payload.title };
    case TrackActionsEnum.START: {
      return { ...state, startTime: action.payload.startTime };
    }
    case TrackActionsEnum.STOP: {
      return { ...state, endTime: action.payload.endTime };
    }
    default:
      return { ...state };
  }
};
