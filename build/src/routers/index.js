"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authRoutes_1 = __importDefault(require("./authRoutes"));
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
class IndexRoute extends baseRoutes_1.default {
    routes() {
        this.router.use("/v1/", authRoutes_1.default);
    }
}
exports.default = new IndexRoute().router;
