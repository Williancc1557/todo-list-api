import type { Router } from "express";
import { adaptRoute } from "../adapters/express-router-adapter";
import { makeFindAllController } from "../factories/find-all";

export default (router: Router) => {
  router.get("/find", adaptRoute(makeFindAllController()));
};
