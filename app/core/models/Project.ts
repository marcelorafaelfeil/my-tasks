import { Client } from './Client';

export interface Project {
  id?: number;
  name: string;
  client?: Client;
  billing: boolean;
  enabled: boolean;
  archived: boolean;
  color?: string;
  createdAt: Date;
  hourPrice?: number;
}
