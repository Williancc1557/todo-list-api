import type { TaskModel } from "../../domain/models/task";
import type { FindAll, FindAllInput } from "../../domain/usecase/find-all";
import type { FindRepository } from "../protocols/find-repository";

export class DbFindAll implements FindAll {
  public constructor(private readonly findRepository: FindRepository) {}

  public async find(data: FindAllInput): Promise<Array<TaskModel>> {
    return this.findRepository.findAll({
      userId: data.userId,
    });
  }
}
