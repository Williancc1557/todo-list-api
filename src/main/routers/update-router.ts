import type { Router } from "express";
import { adaptRoute } from "../adapters/express-router-adapter";
import { makeUpdateController } from "../factories/update";

export const updateRouter = (router: Router) => {
  router.put("/update/:id", adaptRoute(makeUpdateController()));
};
