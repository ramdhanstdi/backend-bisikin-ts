import { Request, Response } from "express";
import { ErrorRes, SuccessRes } from "../helpers/standardResponse";
import { IResult } from "./controllerInterface";
import ProfileModels from "../models/profileModels";
import { IExtenderValidation } from "../middleware/authentication";

class ProfileControlller {
  getProfile = async (req: Request, res: Response): Promise<Response> => {
    const result: IResult = await ProfileModels.getProfile(req.body.userId);
    console.log(result);

    if (result.error) {
      return new ErrorRes(
        res,
        result.error,
        "User not found",
        null,
        400
      ).response();
    } else if (result.success.length < 1) {
      return new ErrorRes(
        res,
        result.error,
        "User not found",
        null,
        400
      ).response();
    } else {
      return new SuccessRes(
        res,
        result.success,
        "Success get profile",
        null,
        200
      ).response();
    }
  };

  editProfile = async (req: Request, res: Response): Promise<Response> => {
    const result: IResult = await ProfileModels.editProfile(req.body.userId);
    if (result.error) {
      return new ErrorRes(
        res,
        result.error,
        "User not found",
        null,
        400
      ).response();
    }
    return new SuccessRes(
      res,
      result.success,
      "Success Update profile",
      null,
      200
    ).response();
  };
}

export default new ProfileControlller();
