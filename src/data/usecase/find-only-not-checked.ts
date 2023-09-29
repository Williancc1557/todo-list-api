import type { TaskModel } from "../../domain/models/task";
import type { FindOnlyNotChecked } from "../../domain/usecase/find-only-checked";
import type { FindRepository } from "../protocols/find-repository";

export class DbFindOnlyNotChecked implements FindOnlyNotChecked {
  public constructor(private readonly findRepository: FindRepository) {}

  public async find(): Promise<Array<TaskModel>> {
    return this.findRepository.findOnlyNotChecked();
  }
}
