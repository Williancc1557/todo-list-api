import type { Router } from "express";
import { adaptRoute } from "../adapters/express-router-adapter";
import { makeFindOnlyNotCheckedController } from "../factories/find-only-not-checked";

export default (router: Router) => {
  router.get(
    "/find/only/notcheckeds",
    adaptRoute(makeFindOnlyNotCheckedController())
  );
};
