import type { TaskModel } from "../../domain/models/task";

export interface FindRepositoryInput {
  _id: string;
  userId: string;
}

export interface UserIdInput {
  userId: string;
}

export interface FindRepository {
  findOne: (data: FindRepositoryInput) => Promise<TaskModel>;
  findAll: (data: UserIdInput) => Promise<Array<TaskModel>>;
  findOnlyNotChecked: (data: UserIdInput) => Promise<Array<TaskModel>>;
  findOnlyChecked: (data: UserIdInput) => Promise<Array<TaskModel>>;
}
