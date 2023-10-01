import type { TaskModel } from "../../domain/models/task";

export type SaveRepositoryInput = Omit<Omit<TaskModel, "_id">, "finished">;

export interface SaveRepository {
  save: (data: SaveRepositoryInput) => Promise<TaskModel>;
}
