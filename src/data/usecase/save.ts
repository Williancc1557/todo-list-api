import type { TaskModel } from "../../domain/models/task";
import type { Save, SaveInput } from "../../domain/usecase/save";
import type { SaveRepository } from "../protocols/save-repository";

export class DbSave implements Save {
  public constructor(private readonly saveRepository: SaveRepository) {}

  public async save(data: SaveInput): Promise<TaskModel> {
    return this.saveRepository.save(data);
  }
}
