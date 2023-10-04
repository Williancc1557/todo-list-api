import type { NextFunction, Request, Response } from "express";
import { unauthorized } from "../../presentation/helpers/http-helper";
import jwt from "jsonwebtoken";
import env from "../config/env";
export const verifyAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const notNeedAccess = ["/key/message"];
  for (const path of notNeedAccess) {
    if (req.path.includes(path)) return next();
  }

  const { body, statusCode } = unauthorized();

  try {
    const accessToken = req.headers.accesstoken as string;
    if (!accessToken) return res.status(statusCode).json(body);

    jwt.verify(accessToken, env.secretAccessTokenJwt);

    const info = jwt.decode(accessToken) as any;
    req.accountId = info.accountId;
    next();
  } catch {
    return res.status(statusCode).json(body);
  }
};
