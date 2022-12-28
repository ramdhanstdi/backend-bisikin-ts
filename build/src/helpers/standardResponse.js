"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SuccessRes {
    constructor(res, msg, results, pageInfo, status = 200) {
        this.res = res;
        this.msg = msg;
        this.results = results;
        this.pageInfo = pageInfo;
        this.status = status;
    }
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
exports.default = SuccessRes;
