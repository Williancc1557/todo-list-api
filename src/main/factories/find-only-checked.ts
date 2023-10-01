import { DbFindOnlyChecked } from "../../data/usecase/find-only-checked";
import { MongoFindRepository } from "../../infra/db/mongodb/repositories/find-repository";
import { FindOnlyCheckedController } from "../../presentation/controller/find-only-checked";

export const makeFindOnlyCheckedController = () => {
  const mongoFindRepository = new MongoFindRepository();
  const dbFindOnlyChecked = new DbFindOnlyChecked(mongoFindRepository);
  const controller = new FindOnlyCheckedController(dbFindOnlyChecked);

  return controller;
};
