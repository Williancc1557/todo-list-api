import type { Router } from "express";
import { adaptRoute } from "../adapters/express-router-adapter";
import { makeDeleteController } from "../factories/delete";

export const deleteRouter = (router: Router) => {
  router.delete("/delete/:id", adaptRoute(makeDeleteController()));
};
