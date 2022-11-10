import express, { Application, Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.cors();
    this.routes();
  }

  protected cors(): void {
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.json({
        success: true,
        message: "server running well",
      });
    });
  }
}

dotenv.config();
const port = process.env.PORT;
const app = new App().app;
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`App Run in Port ${port}`);
});
