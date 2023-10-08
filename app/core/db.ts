import Dexie, { Table } from 'dexie';

export interface Tasks {
  id?: number;
  title: string;
  startDate: Date;
}

export class DBInitializer extends Dexie {
  tasks!: Table<Tasks>;

  constructor() {
    super('MyTasks');
    this.version(1).stores({
      tasks: '++id, title',
    });
  }
}

export const db = new DBInitializer();
