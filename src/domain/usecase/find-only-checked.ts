import type { TaskModel } from "../models/task";

export interface FindOnlyChecked {
  find: () => Promise<Array<TaskModel>>;
}
