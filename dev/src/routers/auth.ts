import { Request, Response, Router } from "express";
import IRouter from "./routeInterface";

class AuthRouter implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  public routes(): void {
    this.router.post("/login", (req: Request, res: Response) => {
      res.json({
        success: true,
        data: req.body,
      });
    });
  }
}

export default new AuthRouter().router;
