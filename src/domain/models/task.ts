import type { ObjectId } from "mongodb";

export interface TaskModel {
  _id: ObjectId;

  name: string;

  description?: string;

  finished?: boolean;
}
