import { TrackStatus } from '@/app/components/timer/track/components/context/Types';
import { Project } from './Project';

export interface DBTasks {
  id?: number;
  title: string;
  startDate: Date;
  endDate?: Date;
  project?: Project;
  status: DBTrackStatus;
}

export enum DBTrackStatus {
  IDLE,
  ONGOING,
  FINISHED,
}

export const dbTrackStatusToTrackState = (status: DBTrackStatus) => {
  switch (status) {
    case DBTrackStatus.IDLE:
      return TrackStatus.IDLE;
    case DBTrackStatus.ONGOING:
      return TrackStatus.ONGOING;
    case DBTrackStatus.FINISHED:
      return TrackStatus.FINISHED;
  }
};
