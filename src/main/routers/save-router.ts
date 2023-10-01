import type { Router } from "express";
import { adaptRoute } from "../adapters/express-router-adapter";
import { makeSaveController } from "../factories/save";

export default (router: Router) => {
  router.post("/save", adaptRoute(makeSaveController()));
};
