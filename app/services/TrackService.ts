import { IndexableType } from 'dexie';
import { TrackState } from '../components/timer/track/components/context/Types';
import { db } from '../core/db';
import {
  DBTasks,
  DBTrackStatus,
  dbTrackStatusToTrackState,
} from '../core/models/Tasks';

export const newTask = async (
  title: string | undefined,
  startDate: Date,
  callback?: (id: string) => void,
) => {
  const id: IndexableType = await db.tasks.add({
    title: title || 'No named task',
    startDate,
    status: DBTrackStatus.ONGOING,
  });

  if (callback) {
    callback(id.toString());
  }
};

export const updateTitle = async (
  id: number,
  title: string,
  callback?: (status: number) => void,
) => {
  if (!id || !title) {
    throw new Error('It is necessary to specify the "id" and "title"');
  }

  const updatedTask: number = await db.tasks.where('id').equals(id).modify({
    title,
  });

  if (callback) {
    callback(updatedTask);
  }
};

export const stopCurrentTask = async (callback?: (status: number) => void) => {
  const onGoingTasks: number = await db.tasks
    .where('status')
    .equals(DBTrackStatus.ONGOING)
    .modify({
      endDate: new Date(),
      status: DBTrackStatus.FINISHED,
    });

  if (callback) {
    callback(onGoingTasks);
  }
};

const bindToTrackState = (dbValue: DBTasks | undefined): TrackState | null => {
  if (dbValue) {
    return {
      id: dbValue.id,
      status: dbTrackStatusToTrackState(dbValue.status),
      startTime: dbValue.startDate,
      endTime: dbValue.endDate,
      title: dbValue.title,
    };
  }
  return null;
};

export const getOngoingTask = async (): Promise<TrackState | null> => {
  const response: DBTasks | undefined = await db.tasks
    .where('status')
    .equals(DBTrackStatus.ONGOING)
    .first();

  return bindToTrackState(response);
};
