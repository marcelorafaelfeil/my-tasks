import { format, parse } from 'date-fns';
import { IndexableType } from 'dexie';
import { db } from '../../../../core/db';
import { GroupedTasks } from '../../../TaskListSection/types/GroupedTasks';
import { Project } from '../context/types/Project';
import { Task } from '../context/types/Task';
import { TaskStatus } from '../context/types/TaskStatus';

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

export const getAllFinishedTasks = async (): Promise<GroupedTasks[]> => {
  const allFinishedTasks: Task[] = await db.tasks
    .where('status')
    .equals(TaskStatus.FINISHED)
    .toArray();
  // const tasksByDay: Task[] = [];

  const reducedItems = allFinishedTasks.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (accumulator: any, item: Task) => {
      if (item.startTime) {
        const key: string = format(item.startTime, 'yyyyMMdd');

        return {
          ...accumulator,
          [key]: [...(accumulator[key]! ?? []), item],
        };
      }
      return {} as Task;
    },
    {},
  );

  const groupedTasks: GroupedTasks[] = [];

  Object.keys(reducedItems).forEach((key: string, index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const item = reducedItems[key];
    groupedTasks.push({
      key: index,
      date: parse(key, 'yyyyMMdd', new Date()),
      items: item.map((task: Task) => ({
        ...task,
      })),
    } as GroupedTasks);
  });

  return groupedTasks;
};
