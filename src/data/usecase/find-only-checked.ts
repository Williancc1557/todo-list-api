import type { TaskModel } from "../../domain/models/task";
import type { FindOnlyChecked } from "../../domain/usecase/find-only-checked";
import type { FindRepository } from "../protocols/find-repository";

export class DbFindOnlyChecked implements FindOnlyChecked {
  public constructor(private readonly findRepository: FindRepository) {}

  public async find(): Promise<Array<TaskModel>> {
    return this.findRepository.findOnlyChecked();
  }
}
