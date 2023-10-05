import type { Router } from "express";
import { adaptRoute } from "../adapters/express-router-adapter";
import { makeFindOnlyNotCheckedController } from "../factories/find-only-not-checked";

export const findOnlyNotCheckedsRouter = (router: Router) => {
  router.get(
    "/find/only/notcheckeds",
    adaptRoute(makeFindOnlyNotCheckedController())
  );
};
