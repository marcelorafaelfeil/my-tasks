import { TrackActionsEnum } from './TrackActionsEnum';
import { TrackAction, TrackState } from './Types';

export const trackReducer = (
  state: TrackState,
  action: TrackAction,
): TrackState => {
  switch (action.type) {
    case TrackActionsEnum.DEFINE_TITLE:
      return { ...state, title: action.payload?.title };
    case TrackActionsEnum.START: {
      return {
        ...state,
        startTime: action.payload?.startTime,
        status: 'ongoing',
      };
    }
    case TrackActionsEnum.STOP: {
      return { status: 'idle' } as TrackState;
    }
    case TrackActionsEnum.RESCUE_TASK: {
      return { ...state, ...action.payload };
    }
    default:
      return { ...state };
  }
};
