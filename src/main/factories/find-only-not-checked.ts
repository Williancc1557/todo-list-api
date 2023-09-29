import { DbFindOnlyNotChecked } from "../../data/usecase/find-only-not-checked";
import { MongoFindRepository } from "../../infra/db/mongodb/repositories/find-repository";
import { FindOnlyNotCheckedController } from "../../presentation/controller/find-only-not-checked";

export const makeFindOnlyNotCheckedController = () => {
  const mongoFindRepository = new MongoFindRepository();
  const dbFindOnlyNotChecked = new DbFindOnlyNotChecked(mongoFindRepository);
  const controller = new FindOnlyNotCheckedController(dbFindOnlyNotChecked);

  return controller;
};
