import Dexie, { Table } from 'dexie';
import { Client } from '../components/timer/track/components/context/types/Client';
import { Project } from '../components/timer/track/components/context/types/Project';
import { Task } from '../components/timer/track/components/context/types/Task';

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
