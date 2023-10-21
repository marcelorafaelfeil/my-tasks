import Dexie, { Table } from 'dexie';
import { Client } from './models/Client';
import { Project } from './models/Project';
import { DBTasks } from './models/Tasks';

export class DBInitializer extends Dexie {
  client!: Table<Client>;
  project!: Table<Project>;
  tasks!: Table<DBTasks>;

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
