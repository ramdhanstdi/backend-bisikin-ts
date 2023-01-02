import AuthController from "../controller/authController";
import BaseRoute from "./baseRoutes";
class AuthRouter extends BaseRoute {
  public routes(): void {
    this.router.post("/register", AuthController.register);
    this.router.post("/login", AuthController.create);
    this.router.delete("/delete", AuthController.delete);
  }
}

export default new AuthRouter().router;
