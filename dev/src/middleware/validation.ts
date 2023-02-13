import { NextFunction, Request, Response } from "express";
import { validationResult, ValidationError } from "express-validator";
import { SuccessRes } from "../helpers/standardResponse";

export default class Validation {
  public static validation = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return new SuccessRes(
        res,
        errors.array(),
        "Error Accured",
        null,
        400
      ).response();
    }
    next();
  };
}
