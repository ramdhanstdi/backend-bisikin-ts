"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standardResponse_1 = __importDefault(require("../helpers/standardResponse"));
const auth_1 = require("../models/auth");
class AuthController {
    constructor() {
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, auth_1.register)(req.body);
            console.log(result);
            return new standardResponse_1.default(res, "Kanjut Badag", result, null).response();
        });
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
