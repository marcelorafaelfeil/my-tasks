import { db } from '@/app/core/db';
import { useLiveQuery } from 'dexie-react-hooks';

export const useCurrentTask = () => {
  return useLiveQuery(() => db.tasks.where('status').equals('ongoing').first());
};
