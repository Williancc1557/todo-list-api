import { DbDelete } from "../../data/usecase/delete";
import { LogControllerDecorator } from "../../decorators/log";
import { MongoDeleteRepository } from "../../infra/db/mongodb/repositories/delete-repository";
import { DeleteController } from "../../presentation/controller/delete";

export const makeDeleteController = () => {
  const deleteRepository = new MongoDeleteRepository();
  const dbDelete = new DbDelete(deleteRepository);
  const controller = new DeleteController(dbDelete);

  return new LogControllerDecorator(controller);
};
