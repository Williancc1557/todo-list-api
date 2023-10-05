import type { TaskModel } from "../models/task";

export interface FindOnlyCheckedInput {
  userId: string;
}

export interface FindOnlyChecked {
  find: (data: FindOnlyCheckedInput) => Promise<Array<TaskModel>>;
}
