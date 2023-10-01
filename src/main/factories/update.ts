import { DbUpdate } from "../../data/usecase/update";
import { MongoUpdateRepository } from "../../infra/db/mongodb/repositories/update-repository";
import { UpdateController } from "../../presentation/controller/update";

export const makeUpdateController = () => {
  const updateRepository = new MongoUpdateRepository();
  const dbUpdate = new DbUpdate(updateRepository);
  const controller = new UpdateController(dbUpdate);

  return controller;
};
