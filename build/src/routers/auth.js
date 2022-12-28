"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../controller/authController"));
class AuthRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post("/login", authController_1.default.get);
        this.router.post("/register", authController_1.default.create);
        this.router.delete("/delete", authController_1.default.delete);
    }
}
exports.default = new AuthRouter().router;
