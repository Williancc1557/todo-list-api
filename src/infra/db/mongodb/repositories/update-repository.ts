import { ObjectId } from "mongodb";
import type {
  UpdateRepository,
  UpdateRepositoryInput,
} from "../../../../data/protocols/update-repository";
import type { TaskModel } from "../../../../domain/models/task";
import { mongoHelper } from "../helpers/mongo-helper";

export class MongoUpdateRepository implements UpdateRepository {
  public async update({
    id,
    ...dataToUpdate
  }: UpdateRepositoryInput): Promise<TaskModel> {
    const taskCollection = await mongoHelper.getCollection("task");

    const { upsertedId } = await taskCollection.updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          ...dataToUpdate,
        },
      }
    );

    return taskCollection.findOne<TaskModel>({
      _id: upsertedId,
    });
  }
}
