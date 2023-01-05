import { Router } from "express";
import AuthRouter from "./authRoutes";
import BaseRoute from "./baseRoutes";
class IndexRoute extends BaseRoute {
  public routes(): void {
    this.router.use("/v1/", AuthRouter);
  }
}
export default new IndexRoute().router;
