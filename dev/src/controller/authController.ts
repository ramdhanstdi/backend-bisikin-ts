import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IController from "./controllerInterface";
import SuccessRes from "../helpers/standardResponse";

class AuthController implements IController {
  get(req: Request, res: Response): Response {
    return new SuccessRes(res, "Kanjut Badag", req.body, null).response();
  }
  detail(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
  create(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
  update(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
}

export default new AuthController();
