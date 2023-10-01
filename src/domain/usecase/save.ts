import type { TaskModel } from "../models/task";

export type SaveInput = Omit<Omit<TaskModel, "_id">, "finished">;

export interface Save {
  save: (data: SaveInput) => Promise<TaskModel>;
}
