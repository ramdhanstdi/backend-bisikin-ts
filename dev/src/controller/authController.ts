import { Request, Response } from "express";
import SuccessRes from "../helpers/standardResponse";
import { register } from "../models/auth";
class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    const result = await register(req.body);
    console.log(result);

    return new SuccessRes(res, "Kanjut Badag", result, null).response();
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
