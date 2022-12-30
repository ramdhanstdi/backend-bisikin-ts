"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = __importDefault(require("../controller/authController"));
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
class AuthRouter extends baseRoutes_1.default {
    routes() {
        this.router.post("/login", authController_1.default.get);
        this.router.post("/register", authController_1.default.create);
        this.router.delete("/delete", authController_1.default.delete);
    }
}
exports.default = new AuthRouter().router;
