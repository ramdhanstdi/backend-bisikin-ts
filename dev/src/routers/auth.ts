import { Request, Response, Router } from "express";
import AuthController from "../controller/authController";
import BaseRoute from "./baseRoutes";
class AuthRouter extends BaseRoute {
  public routes(): void {
    this.router.post("/login", AuthController.get);
    this.router.post("/register", AuthController.create);
    this.router.delete("/delete", AuthController.delete);
  }
}

export default new AuthRouter().router;
