import { getOngoingTask } from '@/app/services/TrackService';
import { useLiveQuery } from 'dexie-react-hooks';

export const useCurrentTask = () => {
  return useLiveQuery(() => getOngoingTask());
};
