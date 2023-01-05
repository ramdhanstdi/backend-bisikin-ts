"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorRes = exports.SuccessRes = void 0;
class StandarResponse {
    constructor(res, results, msg, pageInfo, status = 200) {
        this.res = res;
        this.msg = msg;
        this.results = results;
        this.pageInfo = pageInfo;
        this.status = status;
    }
}
class SuccessRes extends StandarResponse {
    response() {
        const data = {
            success: true,
            msg: this.msg,
            results: this.results,
            pageInfo: this.pageInfo,
        };
        if (this.status >= 400) {
            data.success = false;
        }
        return this.res.status(this.status).json(data);
    }
}
exports.SuccessRes = SuccessRes;
class ErrorRes extends StandarResponse {
    response() {
        const data = {
            success: false,
            msg: this.msg,
        };
        if (this.results.code === "P2002" &&
            this.results.meta.target[0] === "email") {
            data.msg = "Email already registered";
        }
        if (this.results.code === "P2002" &&
            this.results.meta.target[0] === "username") {
            data.msg = "Username already used";
        }
        return this.res.status(this.status).json(data);
    }
}
exports.ErrorRes = ErrorRes;
