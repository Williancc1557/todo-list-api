import type { TaskModel } from "../../domain/models/task";

interface UpdateRepositoryInputId {
  id: string;
}

export type UpdateRepositoryInput = Partial<
  Omit<TaskModel, "_id"> & UpdateRepositoryInputId
>;

export interface UpdateRepository {
  update: (data: UpdateRepositoryInput) => Promise<TaskModel>;
}
