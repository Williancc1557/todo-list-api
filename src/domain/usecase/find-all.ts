import type { TaskModel } from "../models/task";

export interface FindAll {
  find: () => Promise<Array<TaskModel>>;
}
