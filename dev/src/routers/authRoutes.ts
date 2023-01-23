import AuthController from "../controller/authController";
import Validation from "../middleware/validation";
import BaseRoute from "./baseRoutes";
import { userSchema } from "./validator";
class AuthRouter extends BaseRoute {
  public routes(): void {
    this.router.post(
      "/register",
      ...userSchema,
      Validation.validation,
      AuthController.register
    );
    this.router.post("/login", AuthController.login);
  }
}

export default new AuthRouter().router;
