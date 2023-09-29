import { ObjectId } from "mongodb";
import type {
  FindRepository,
  FindRepositoryInput,
} from "../../../../data/protocols/find-repository";
import type { TaskModel } from "../../../../domain/models/task";
import { mongoHelper } from "../helpers/mongo-helper";

export class MongoFindRepository implements FindRepository {
  public async findOne(data?: FindRepositoryInput): Promise<TaskModel> {
    const taskCollection = await mongoHelper.getCollection("task");

    const task = await taskCollection.findOne<TaskModel>({
      _id: new ObjectId(data._id),
    });

    return task;
  }

  public async findAll(): Promise<Array<TaskModel>> {
    const taskCollection = await mongoHelper.getCollection("task");

    const tasks = await taskCollection.find<TaskModel>({}).toArray();

    return tasks;
  }
}
