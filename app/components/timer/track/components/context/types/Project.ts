import { Client } from './Client';

export type Project = {
  id?: number;
  name: string;
  client?: Client;
  billing: boolean;
  hourPrice?: number;
  enabled: boolean;
  archived: boolean;
  color?: string;
  createdAt: Date;
};
