import type { TaskModel } from "../../domain/models/task";
import type { FindAll } from "../../domain/usecase/find-all";
import type { FindOneInput } from "../../domain/usecase/find-one";
import type { FindRepository } from "../protocols/find-repository";

export class DbFindAll implements FindAll {
  public constructor(private readonly findRepository: FindRepository) {}

  public async find(data: FindOneInput): Promise<Array<TaskModel>> {
    return this.findRepository.findAll({
      userId: data.userId,
    });
  }
}
