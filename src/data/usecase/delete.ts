import type { Delete, DeleteInput } from "../../domain/usecase/delete";
import type { DeleteRepository } from "../protocols/delete-repository";

export class DbDelete implements Delete {
  public constructor(private readonly deleteRepository: DeleteRepository) {}

  public delete(data: DeleteInput): Promise<void> {
    return this.deleteRepository.delete(data._id);
  }
}
