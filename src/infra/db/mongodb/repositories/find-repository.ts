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

    return mongoHelper.map(task);
  }

  public async findAll(): Promise<Array<TaskModel>> {
    const taskCollection = await mongoHelper.getCollection("task");

    const tasks = await taskCollection.find<TaskModel>({}).toArray();

    return mongoHelper.mapArray(tasks);
  }

  public async findOnlyNotChecked(): Promise<Array<TaskModel>> {
    const taskCollection = await mongoHelper.getCollection("task");

    const tasks = await taskCollection
      .find<TaskModel>({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        finished: false,
      })
      .toArray();

    return mongoHelper.mapArray(tasks);
  }

  public async findOnlyChecked(): Promise<Array<TaskModel>> {
    const taskCollection = await mongoHelper.getCollection("task");

    const tasks = await taskCollection
      .find<TaskModel>({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        finished: true,
      })
      .toArray();

    return mongoHelper.mapArray(tasks);
  }
}
