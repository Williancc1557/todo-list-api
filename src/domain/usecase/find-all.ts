import type { TaskModel } from "../models/task";

export interface FindAllInput {
  userId: string;
}

export interface FindAll {
  find: (data: FindAllInput) => Promise<Array<TaskModel>>;
}
