import type { TaskModel } from "../../domain/models/task";
import type {
  FindOnlyNotChecked,
  FindOnlyNotCheckedInput,
} from "../../domain/usecase/find-only-not-checked";
import type { FindRepository } from "../protocols/find-repository";

export class DbFindOnlyNotChecked implements FindOnlyNotChecked {
  public constructor(private readonly findRepository: FindRepository) {}

  public async find(data: FindOnlyNotCheckedInput): Promise<Array<TaskModel>> {
    return this.findRepository.findOnlyNotChecked({
      userId: data.userId,
    });
  }
}
