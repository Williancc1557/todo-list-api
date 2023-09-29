import type { TaskModel } from "../models/task";

export interface FindOnlyNotChecked {
  find: () => Promise<Array<TaskModel>>;
}
