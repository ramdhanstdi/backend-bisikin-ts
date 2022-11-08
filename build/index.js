"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
const test = "sting";
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "server running well"
    });
});
app.listen(port, () => {
    console.log(`App Run in Port ${port}`);
});
