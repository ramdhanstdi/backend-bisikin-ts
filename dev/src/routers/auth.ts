import { Request, Response, Router } from "express";
import IRouter from "./routeInterface";
import AuthController from "../controller/authController";
class AuthRouter implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  public routes(): void {
    this.router.post("/login", AuthController.get);
    this.router.post("/register", AuthController.create);
    this.router.delete("/delete", AuthController.delete);
  }
}

export default new AuthRouter().router;
