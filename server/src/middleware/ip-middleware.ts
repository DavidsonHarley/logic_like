import { Request, Response, NextFunction } from "express";

export function ipMiddleware(
  req: Request & { clientIp?: string },
  res: Response,
  next: NextFunction
) {
  const forwardedFor = req.headers["x-forwarded-for"];
  let clientIp: string | undefined;

  if (forwardedFor) {
    clientIp = Array.isArray(forwardedFor)
      ? forwardedFor[0].trim()
      : forwardedFor.split(",")[0].trim();
  } else {
    clientIp = req.ip;
  }

  req.clientIp = clientIp;
  next();
}
