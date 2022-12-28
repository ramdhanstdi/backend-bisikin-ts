import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import IndexRoute from "./src/routers";
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugin();
    this.routes();
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
    this.app.use("/", IndexRoute);
  }
}

dotenv.config();
const port = process.env.PORT;
const app = new App().app;

app.listen(port, () => {
  console.log(`App Run in Port ${port}`);
});
