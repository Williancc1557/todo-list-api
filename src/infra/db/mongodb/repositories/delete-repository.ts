import { ObjectId } from "mongodb";
import type { DeleteRepository } from "../../../../data/protocols/delete-repository";
import { mongoHelper } from "../helpers/mongo-helper";

export class MongoDeleteRepository implements DeleteRepository {
  public async delete(id: string): Promise<void> {
    const taskCollection = await mongoHelper.getCollection("task");

    await taskCollection.deleteOne({
      _id: new ObjectId(id),
    });
  }
}
