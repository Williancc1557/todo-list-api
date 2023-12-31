import type { Router } from "express";
import { adaptRoute } from "../adapters/express-router-adapter";
import { makeFindOneController } from "../factories/find-one";

export const findByIdRouter = (router: Router) => {
  router.get("/find/:id", adaptRoute(makeFindOneController()));
};
