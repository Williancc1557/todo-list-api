import { ObjectId } from "mongodb";
import type {
  FindRepository,
  FindRepositoryInput,
  UserIdInput,
} from "../../../../data/protocols/find-repository";
import type { TaskModel } from "../../../../domain/models/task";
import { mongoHelper } from "../helpers/mongo-helper";

export class MongoFindRepository implements FindRepository {
  public async findOne(data?: FindRepositoryInput): Promise<TaskModel> {
    const taskCollection = await mongoHelper.getCollection("task");

    const task = await taskCollection.findOne<TaskModel>({
      _id: new ObjectId(data._id),
      userId: data.userId,
    });

    return mongoHelper.map(task);
  }

  public async findAll(data: UserIdInput): Promise<Array<TaskModel>> {
    const taskCollection = await mongoHelper.getCollection("task");

    const tasks = await taskCollection
      .find<TaskModel>({
        userId: data.userId,
      })
      .toArray();

    return mongoHelper.mapArray(tasks);
  }

  public async findOnlyNotChecked(
    data: UserIdInput
  ): Promise<Array<TaskModel>> {
    const taskCollection = await mongoHelper.getCollection("task");

    const tasks = await taskCollection
      .find<TaskModel>({
        finished: false,
        userId: data.userId,
      })
      .toArray();

    return mongoHelper.mapArray(tasks);
  }

  public async findOnlyChecked(data: UserIdInput): Promise<Array<TaskModel>> {
    const taskCollection = await mongoHelper.getCollection("task");

    const tasks = await taskCollection
      .find<TaskModel>({
        finished: true,
        userId: data.userId,
      })
      .toArray();

    return mongoHelper.mapArray(tasks);
  }
}
