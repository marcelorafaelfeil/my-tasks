import { IndexableType } from 'dexie';
import { db } from '../core/db';

export const newProject = async (
  name: string,
  billing: boolean,
  hourPrice?: number,
  callback?: (id: string) => void,
) => {
  const id: IndexableType = await db.project.add({
    name,
    billing,
    hourPrice,
    enabled: true,
    archived: false,
    createdAt: new Date(),
  });

  if (callback) {
    callback(id.toString());
  }
};
