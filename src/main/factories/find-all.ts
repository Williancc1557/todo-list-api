import { DbFindAll } from "../../data/usecase/find-all";
import { MongoFindRepository } from "../../infra/db/mongodb/repositories/find-repository";
import { FindAllController } from "../../presentation/controller/find-all";

export const makeFindAllController = () => {
  const findAllRepository = new MongoFindRepository();
  const dbFindAll = new DbFindAll(findAllRepository);
  const findAllController = new FindAllController(dbFindAll);

  return findAllController;
};
