import type {
  SaveRepository,
  SaveRepositoryInput,
} from "../../../../data/protocols/save-repository";
import type { TaskModel } from "../../../../domain/models/task";
import { mongoHelper } from "../helpers/mongo-helper";

export class MongoSaveRepository implements SaveRepository {
  public async save(data: SaveRepositoryInput): Promise<TaskModel> {
    const taskCollection = await mongoHelper.getCollection("task");

    const { insertedId } = await taskCollection.insertOne({
      ...data,
      finished: false,
    });

    return mongoHelper.map(
      await taskCollection.findOne<TaskModel>({
        _id: insertedId,
      })
    );
  }
}
