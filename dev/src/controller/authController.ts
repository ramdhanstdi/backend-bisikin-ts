import { Request, Response } from "express";
import { ErrorRes, SuccessRes } from "../helpers/standardResponse";
import { register } from "../models/authModels";
import TController from "./controllerInterface";
class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    const result: any = await register(req.body);
    if (result.error) {
      return new ErrorRes(res, result.error, null, null, 404).response();
    }
    return new SuccessRes(
      res,
      result.success,
      "Success Create Account",
      null
    ).response();
  };
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
