import { DbSave } from "../../data/usecase/save";
import { LogControllerDecorator } from "../../decorators/log";
import { MongoSaveRepository } from "../../infra/db/mongodb/repositories/save-repository";
import { SaveController } from "../../presentation/controller/save";

export const makeSaveController = () => {
  const saveRepository = new MongoSaveRepository();
  const dbSave = new DbSave(saveRepository);
  const controller = new SaveController(dbSave);

  return new LogControllerDecorator(controller);
};
