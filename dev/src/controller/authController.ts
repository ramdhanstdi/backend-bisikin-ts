import { Request, Response } from "express";
import { ErrorRes, SuccessRes } from "../helpers/standardResponse";
import AuthModels from "../models/authModels";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mailer from "../mailers/mailer";
class AuthController {
  //Register new Account
  register = async (req: Request, res: Response): Promise<Response> => {
    const result: any = await AuthModels.register(req.body);
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

  // Login Account
  login = async (
    req: Request,
    res: Response
  ): Promise<Response | undefined> => {
    const result: any = await AuthModels.login(req.body);
    //checking phase user is available or not
    if (result.error) {
      return new ErrorRes(res, result.error, null, null, 403).response();
    } else if (result.success == null) {
      return new SuccessRes(res, null, "User not found", null, 403).response();
    } else {
      const user = result.success[0];
      if (!user.isActive) {
        const numOTP = Math.floor(100000 + Math.random() * 900000);
        mailer.sendMail(numOTP, "login", user.email);
        return new SuccessRes(
          res,
          null,
          "Check Your Email to Got OTP",
          null,
          403
        ).response();
      }
      // Compare password to login
      bcrypt
        .compare(req.body.password, user.password)
        .then((cpres) => {
          if (cpres) {
            const token = jwt.sign(
              { id: user.id },
              process.env.APP_KEY || "secret"
            );
            return new SuccessRes(res, token, "Login Success", null).response();
          }
        })
        .catch((error) => {
          return new SuccessRes(
            res,
            error,
            "Wrong Password",
            null,
            403
          ).response();
        });
    }
  };
}

export default new AuthController();
