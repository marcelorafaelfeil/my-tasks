import { getAllFinishedTasks } from '@/app/services/TaskService';
import { useLiveQuery } from 'dexie-react-hooks';

export const useAllFinishedTasks = () => {
  return useLiveQuery(() => getAllFinishedTasks());
};
