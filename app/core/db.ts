import Dexie, { Table } from 'dexie';

export interface Client {
  id?: number;
  name: string;
  createdAt?: Date;
  enabled: boolean;
  archived: boolean;
}

export interface Project {
  id?: number;
  name: string;
  client?: Client;
  billing: boolean;
  enabled: boolean;
  archived: boolean;
  color?: string;
  createdAt: Date;
  hourPrice: number;
}

export interface Tasks {
  id?: number;
  title: string;
  startDate: Date;
  endDate?: Date;
  project?: Project;
  status: 'idle' | 'ongoing' | 'finished';
}

export class DBInitializer extends Dexie {
  client!: Table<Client>;
  project!: Table<Project>;
  tasks!: Table<Tasks>;

  constructor() {
    super('MyTasks');
    this.version(1).stores({
      client: '++id, name, enabled, archived',
      project: '++id, name, client, billing, enabled, archived',
      tasks: '++id, title, status',
    });
  }
}

export const db = new DBInitializer();
