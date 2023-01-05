"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = __importDefault(require("../controller/authController"));
const validation_1 = __importDefault(require("../middleware/validation"));
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const validator_1 = require("./validator");
class AuthRouter extends baseRoutes_1.default {
    routes() {
        this.router.post("/register", ...validator_1.userSchema, validation_1.default.validation, authController_1.default.register);
        this.router.post("/login", validator_1.userSchema[0], validator_1.userSchema[1], authController_1.default.create);
        this.router.delete("/delete", authController_1.default.delete);
    }
}
exports.default = new AuthRouter().router;
