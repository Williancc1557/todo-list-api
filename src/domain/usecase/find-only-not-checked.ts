import type { TaskModel } from "../models/task";

export interface FindOnlyNotCheckedInput {
  userId: string;
}

export interface FindOnlyNotChecked {
  find: (data: FindOnlyNotCheckedInput) => Promise<Array<TaskModel>>;
}
