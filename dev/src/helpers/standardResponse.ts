import { Response } from "express";

class SuccessRes {
  res: Response;
  msg: string;
  results: any;
  pageInfo: object | null;
  status: number;

  constructor(
    res: Response,
    msg: string,
    results: any,
    pageInfo: object | null,
    status: number = 200
  ) {
    this.res = res;
    this.msg = msg;
    this.results = results;
    this.pageInfo = pageInfo;
    this.status = status;
  }

  public response() {
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

export default SuccessRes;
