import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { SuccessRes } from "../helpers/standardResponse";

export interface IExtenderValidation {
  userId: string | JwtPayload;
}

class Authentication {
  public static authentication = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (req.headers.authorization) {
      const auth = req.headers.authorization;
      const prefix = "Bearer ";
      if (auth.startsWith(prefix)) {
        const token = auth.slice(prefix.length, auth.length);
        try {
          const result = jwt.verify(token, process.env.APP_KEY || "secret");
          req.body.userId = result;
          next();
        } catch (error) {
          return new SuccessRes(
            res,
            null,
            "Unauthorized",
            null,
            401
          ).response();
        }
      }
    } else {
      return new SuccessRes(res, null, "Unauthorized", null, 401).response();
    }
  };
}

export default Authentication;
