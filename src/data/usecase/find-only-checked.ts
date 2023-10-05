import type { TaskModel } from "../../domain/models/task";
import type {
  FindOnlyChecked,
  FindOnlyCheckedInput,
} from "../../domain/usecase/find-only-checked";
import type { FindRepository } from "../protocols/find-repository";

export class DbFindOnlyChecked implements FindOnlyChecked {
  public constructor(private readonly findRepository: FindRepository) {}

  public async find(data: FindOnlyCheckedInput): Promise<Array<TaskModel>> {
    return this.findRepository.findOnlyChecked({
      userId: data.userId,
    });
  }
}
