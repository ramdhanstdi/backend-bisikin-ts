"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const routers_1 = __importDefault(require("./src/routers"));
const dotenv_1 = require("dotenv");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugin();
        this.routes();
        (0, dotenv_1.config)();
    }
    plugin() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.json({
                success: true,
                message: "server running well",
            });
        });
        this.app.use("/api", routers_1.default);
    }
}
const app = new App().app;
app.listen(() => {
    console.log(`App Run in Port ${process.env.PORT}`);
});
