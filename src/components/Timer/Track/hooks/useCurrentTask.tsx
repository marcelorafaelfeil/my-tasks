import { useLiveQuery } from 'dexie-react-hooks';
import { getOngoingTask } from '../services/TaskService';

export const useCurrentTask = () => {
  return useLiveQuery(() => getOngoingTask());
};
