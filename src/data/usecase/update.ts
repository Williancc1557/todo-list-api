import type { TaskModel } from "../../domain/models/task";
import type { Update, UpdateInput } from "../../domain/usecase/update";
import type { UpdateRepository } from "../protocols/update-repository";

export class DbUpdate implements Update {
  public constructor(private readonly updateRepository: UpdateRepository) {}

  public async update(data: UpdateInput): Promise<TaskModel> {
    return this.updateRepository.update(data);
  }
}
