import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import IndexRoute from "./src/routers";
import { config as dotenv } from "dotenv";
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugin();
    this.routes();
    dotenv();
  }

  protected plugin(): void {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(morgan("dev"));
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.json({
        success: true,
        message: "server running well",
      });
    });
    this.app.use("/api", IndexRoute);
  }
}

const app = new App().app;

app.listen(() => {
  console.log(`App Run in Port ${process.env.PORT}`);
});
