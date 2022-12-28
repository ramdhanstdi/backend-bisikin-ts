"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AuthRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post("/login", (req, res) => {
            res.json({
                success: true,
                data: req.body,
            });
        });
    }
}
exports.default = new AuthRouter().router;
