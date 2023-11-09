import { useLiveQuery } from 'dexie-react-hooks';
import { getAllProjects } from '../services/ProjectService';

export const useAllProjects = () => {
  return useLiveQuery(() => getAllProjects());
};
