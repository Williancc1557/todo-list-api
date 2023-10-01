import type { Router } from "express";
import { adaptRoute } from "../adapters/express-router-adapter";
import { makeFindOnlyCheckedController } from "../factories/find-only-checked";

export default (router: Router) => {
  router.get(
    "/find/only/checkeds",
    adaptRoute(makeFindOnlyCheckedController())
  );
};
