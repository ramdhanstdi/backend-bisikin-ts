import { Router } from "express";
import AuthRouter from "./authRoutes";
import BaseRoute from "./baseRoutes";
import ProfileRoute from "./profileRoute";
class IndexRoute extends BaseRoute {
  public routes(): void {
    this.router.use("/v1/auth", AuthRouter);
    this.router.use("/v1", ProfileRoute);
  }
}
export default new IndexRoute().router;
