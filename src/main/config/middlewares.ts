import type { Express } from "express";
import { bodyParser } from "../middlewares/body-parser";
import { contentType } from "../middlewares/content-type";
import { cors } from "../middlewares/cors";
import { verifyAccess } from "../middlewares/verify-access";
import { passContentHeaderMiddleware } from "../middlewares/pass-content-header";
import { limiter } from "../middlewares/rate-limit";

export const setupMiddlewares = (app: Express) => {
  app.use(bodyParser);
  app.use(contentType);
  app.use(cors);
  app.use(limiter);
  app.use(verifyAccess);
  app.use(passContentHeaderMiddleware);
};
