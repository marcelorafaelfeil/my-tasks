import { getAllProjects } from '@/app/services/ProjectService';
import { useLiveQuery } from 'dexie-react-hooks';

export const useAllProjects = () => {
  return useLiveQuery(() => getAllProjects());
};
