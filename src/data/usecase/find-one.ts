import type { TaskModel } from "../../domain/models/task";
import type { FindOne, FindOneInput } from "../../domain/usecase/find-one";
import type { FindRepository } from "../protocols/find-repository";

export class DbFindOne implements FindOne {
  public constructor(private readonly findRepository: FindRepository) {}

  public async find(data: FindOneInput): Promise<TaskModel> {
    return this.findRepository.findOne({
      _id: data.id,
    });
  }
}
