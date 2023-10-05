import { DbFindOne } from "../../data/usecase/find-one";
import { LogControllerDecorator } from "../../decorators/log";
import { MongoFindRepository } from "../../infra/db/mongodb/repositories/find-repository";
import { FindOneController } from "../../presentation/controller/find-one";

export const makeFindOneController = () => {
  const findOneRepository = new MongoFindRepository();
  const dbFindOne = new DbFindOne(findOneRepository);
  const controller = new FindOneController(dbFindOne);

  return new LogControllerDecorator(controller);
};
