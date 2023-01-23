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
const standardResponse_1 = require("../helpers/standardResponse");
const authModels_1 = __importDefault(require("../models/authModels"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mailer_1 = __importDefault(require("../mailers/mailer"));
class AuthController {
    constructor() {
        //Register new Account
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield authModels_1.default.register(req.body);
            if (result.error) {
                return new standardResponse_1.ErrorRes(res, result.error, null, null, 404).response();
            }
            return new standardResponse_1.SuccessRes(res, result.success, "Success Create Account", null).response();
        });
        // Login Account
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield authModels_1.default.login(req.body);
            //checking phase user is available or not
            if (result.error) {
                return new standardResponse_1.ErrorRes(res, result.error, null, null, 403).response();
            }
            else if (result.success == null) {
                return new standardResponse_1.SuccessRes(res, null, "User not found", null, 403).response();
            }
            else {
                const user = result.success[0];
                if (!user.isActive) {
                    const numOTP = Math.floor(100000 + Math.random() * 900000);
                    mailer_1.default.sendMail(numOTP, "login", user.email);
                    return new standardResponse_1.SuccessRes(res, null, "Check Your Email to Got OTP", null, 403).response();
                }
                // Compare password to login
                bcrypt_1.default
                    .compare(req.body.password, user.password)
                    .then((cpres) => {
                    if (cpres) {
                        const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.APP_KEY || "secret");
                        return new standardResponse_1.SuccessRes(res, token, "Login Success", null).response();
                    }
                })
                    .catch((error) => {
                    return new standardResponse_1.SuccessRes(res, error, "Wrong Password", null, 403).response();
                });
            }
        });
    }
}
exports.default = new AuthController();
