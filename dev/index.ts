import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();
const port = process.env.PORT;
const app: Express = express();
const test:String = "sting";

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    return res.json({
        success: true,
        message: "server running well"
    })
});

app.listen(port, () => {
    console.log(`App Run in Port ${port}`);
});

