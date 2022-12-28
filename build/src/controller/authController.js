"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standardResponse_1 = __importDefault(require("../helpers/standardResponse"));
class AuthController {
    get(req, res) {
        return new standardResponse_1.default(res, "Kanjut Badag", req.body, null).response();
    }
    detail(req, res) {
        throw new Error("Method not implemented.");
    }
    create(req, res) {
        throw new Error("Method not implemented.");
    }
    update(req, res) {
        throw new Error("Method not implemented.");
    }
    delete(req, res) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new AuthController();
