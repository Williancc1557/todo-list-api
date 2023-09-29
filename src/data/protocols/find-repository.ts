import type { TaskModel } from "../../domain/models/task";

export interface FindRepositoryInput {
  _id: string;
}

export interface FindRepository {
  findOne: (data?: FindRepositoryInput) => Promise<TaskModel>;
  findAll: () => Promise<Array<TaskModel>>;
}
