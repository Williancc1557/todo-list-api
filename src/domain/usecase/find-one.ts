import type { TaskModel } from "../models/task";

export interface FindOneInput {
  id: string;
  userId: string;
}

export interface FindOne {
  find: (data: FindOneInput) => Promise<TaskModel>;
}
