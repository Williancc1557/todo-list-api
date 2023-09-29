import type { Router } from "express";
import { adaptRoute } from "../adapters/express-router-adapter";
import { makeFindOneController } from "../factories/find-one";

export default (router: Router) => {
  router.get("/find/:id", adaptRoute(makeFindOneController()));
};
