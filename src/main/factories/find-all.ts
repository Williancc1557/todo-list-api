import { DbFindAll } from "../../data/usecase/find-all";
import { LogControllerDecorator } from "../../decorators/log";
import { MongoFindRepository } from "../../infra/db/mongodb/repositories/find-repository";
import { FindAllController } from "../../presentation/controller/find-all";

export const makeFindAllController = () => {
  const findAllRepository = new MongoFindRepository();
  const dbFindAll = new DbFindAll(findAllRepository);
  const controller = new FindAllController(dbFindAll);

  return new LogControllerDecorator(controller);
};
