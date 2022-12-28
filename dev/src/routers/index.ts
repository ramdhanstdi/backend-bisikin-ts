import { Router } from "express";
import IRouter from "./routeInterface";
import AuthRouter from "./auth";
class IndexRoute implements IRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.use("/", AuthRouter);
  }
}
export default new IndexRoute().router;
