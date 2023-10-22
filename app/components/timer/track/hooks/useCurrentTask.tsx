import { getOngoingTask } from '@/app/services/TaskService';
import { useLiveQuery } from 'dexie-react-hooks';

export const useCurrentTask = () => {
  return useLiveQuery(() => getOngoingTask());
};
