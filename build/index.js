"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.cors();
        this.routes();
    }
    cors() {
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.json({
                success: true,
                message: "server running well",
            });
        });
    }
}
dotenv_1.default.config();
const port = process.env.PORT;
const app = new App().app;
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(port, () => {
    console.log(`App Run in Port ${port}`);
});
