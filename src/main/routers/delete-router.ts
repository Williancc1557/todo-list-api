import type { Router } from "express";
import { adaptRoute } from "../adapters/express-router-adapter";
import { makeDeleteController } from "../factories/delete";

export default (router: Router) => {
  router.delete("/delete/:id", adaptRoute(makeDeleteController()));
};
