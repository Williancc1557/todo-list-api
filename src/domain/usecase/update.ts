import type { TaskModel } from "../models/task";

interface UpdateInputId {
  id: string;
}

export type UpdateInput = Partial<Omit<TaskModel, "_id"> & UpdateInputId>;

export interface Update {
  update: (data: UpdateInput) => Promise<TaskModel>;
}
