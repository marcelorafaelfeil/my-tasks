import Dexie, { Table } from 'dexie';
import { Client } from '../components/Timer/Track/context/types/Client';
import { Project } from '../components/Timer/Track/context/types/Project';
import { Task } from '../components/Timer/Track/context/types/Task';

export class DBInitializer extends Dexie {
  client!: Table<Client>;
  project!: Table<Project>;
  tasks!: Table<Task>;

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
