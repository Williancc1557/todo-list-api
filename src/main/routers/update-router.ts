import type { Router } from "express";
import { adaptRoute } from "../adapters/express-router-adapter";
import { makeUpdateController } from "../factories/update";

export default (router: Router) => {
  router.put("/update/:id", adaptRoute(makeUpdateController()));
};
