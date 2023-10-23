import { IndexableType } from 'dexie';
import { Project } from '../components/timer/track/components/context/types/Project';
import { Task } from '../components/timer/track/components/context/types/Task';
import { TaskStatus } from '../components/timer/track/components/context/types/TaskStatus';
import { db } from '../core/db';

export const newTask = async (
  title: string | undefined,
  startTime: Date,
  project: Project | undefined,
): Promise<string> => {
  const id: IndexableType = await db.tasks.add({
    title: title || 'No named task',
    project,
    startTime,
    status: TaskStatus.ONGOING,
  });

  return id.toString();
};

export const updateTitle = async (
  id: number,
  title: string,
): Promise<number> => {
  if (!id || !title) {
    throw new Error('It is necessary to specify the "id" and "title"');
  }

  const updatedTask: number = await db.tasks.where('id').equals(id).modify({
    title,
  });

  return updatedTask;
};

export const stopCurrentTask = async (): Promise<number> => {
  const onGoingTasks: number = await db.tasks
    .where('status')
    .equals(TaskStatus.ONGOING)
    .modify({
      endDate: new Date(),
      status: TaskStatus.FINISHED,
    });

  return onGoingTasks;
};

export const getOngoingTask = async (): Promise<Task | undefined> => {
  return await db.tasks.where('status').equals(TaskStatus.ONGOING).first();
};
