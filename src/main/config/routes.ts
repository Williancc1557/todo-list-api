import type { Express } from "express";
import { Router } from "express";
import { deleteRouter } from "../routers/delete-router";
import { findRouter } from "../routers/find-all-router";
import { findByIdRouter } from "../routers/find-one-router";
import { findOnlyCheckedsRouter } from "../routers/find-only-checked-router";
import { findOnlyNotCheckedsRouter } from "../routers/find-only-not-checked-router";
import { saveRouter } from "../routers/save-router";
import { updateRouter } from "../routers/update-router";
import { logger } from "../../utils/logger";

export const setupRoutes = (app: Express) => {
  const router = Router();

  app.use(router);

  deleteRouter(router);
  findRouter(router);
  findByIdRouter(router);
  findOnlyCheckedsRouter(router);
  findOnlyNotCheckedsRouter(router);
  saveRouter(router);
  updateRouter(router);

  logger.info("All routers are set up");
};
