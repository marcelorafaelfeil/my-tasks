import { useLiveQuery } from 'dexie-react-hooks';
import { getAllFinishedTasks } from '../../Timer/Track/services/TaskService';

export const useAllFinishedTasks = () => {
  return useLiveQuery(() => getAllFinishedTasks());
};
