import { IndexableType } from 'dexie';
import { db } from '../core/db';

export const newTask = async (
  title: string | undefined,
  startDate: Date,
  callback?: (id: string) => void,
) => {
  const id: IndexableType = await db.tasks.add({
    title: title || 'No named task',
    startDate,
    status: 'ongoing',
  });

  if (callback) {
    callback(id.toString());
  }
};

export const stopCurrentTask = async (callback?: (status: number) => void) => {
  const onGoingTasks: number = await db.tasks
    .where('status')
    .equals('ongoing')
    .modify({
      endDate: new Date(),
      status: 'finished',
    });

  if (callback) {
    callback(onGoingTasks);
  }
};
