import { IndexableType } from 'dexie';
import { db } from '../../../../core/db';
import { Project } from '../context/types/Project';

export const newProject = async (
  name: string,
  billing: boolean,
  hourPrice?: number,
): Promise<Project | undefined> => {
  const id: IndexableType = await db.project.add({
    name,
    billing,
    hourPrice,
    enabled: true,
    archived: false,
    createdAt: new Date(),
  });

  const response: Project | undefined = await db.project
    .where('id')
    .equals(id)
    .first();

  return response;
};

export const getAllProjects = async (): Promise<Project[]> => {
  const projects: Project[] = await db.project.toArray();

  return projects;
};
