import { Request, Response } from "express";
import { ErrorRes, SuccessRes } from "../helpers/standardResponse";
import AuthModels from "../models/authModels";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mailer from "../mailers/mailer";
class AuthController {
  //Register new Account
  register = async (req: Request, res: Response): Promise<Response> => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const result: any = await AuthModels.register({ ...req.body, otp });
    if (result.error) {
      return new ErrorRes(res, result.error, null, null, 404).response();
    }
    mailer.sendMail(otp, "login", req.body.email);
    return new SuccessRes(
      res,
      null,
      "Check Your Email to activating your account",
      null,
      200
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
      // Compare password to login
      bcrypt
        .compare(req.body.password, user.password)
        .then((cpres) => {
          if (cpres) {
            if (!user.isActive) {
              const numOTP = Math.floor(100000 + Math.random() * 900000);
              AuthModels.resetOtp({ user: user.email, otp: numOTP });
              mailer.sendMail(numOTP, "login", user.email);
              return new SuccessRes(
                res,
                null,
                "Check Your Email to activating your account",
                null,
                403
              ).response();
            } else {
              const token = jwt.sign(
                { id: user.id, status: user.isActive },
                process.env.APP_KEY || "secret"
              );
              return new SuccessRes(
                res,
                token,
                "Login Success",
                null
              ).response();
            }
          }
        })
        .catch((error) => {
          return new SuccessRes(
            res,
            error,
            "Wrong email or password",
            null,
            403
          ).response();
        });
    }
  };

  // Activation Account with OTP
  activationAccount = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const result: any = await AuthModels.activation(req.body);
    if (result.error) {
      return new ErrorRes(res, result.error, null, null, 403).response();
    } else {
      return new SuccessRes(
        res,
        result,
        "Your account is now active",
        null,
        200
      ).response();
    }
  };
}

export default new AuthController();
