"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
const response = (res, msg, result, pageInfo, status = 200) => {
    const data = {
        success: true,
        message: msg,
        pageInfo,
        result,
    };
    if (status >= 400) {
        data.success = false;
    }
    if (pageInfo) {
        data.pageInfo = pageInfo;
    }
    if (result) {
        data.result = result;
    }
    return res.status(status).json(data);
};
exports.response = response;
