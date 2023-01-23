import { Response } from "express";

abstract class StandarResponse {
  res: Response;
  results: any;
  msg: string | null;
  pageInfo: object | null;
  status: number;

  constructor(
    res: Response,
    results: any,
    msg: string | null,
    pageInfo: object | null,
    status: number = 200
  ) {
    this.res = res;
    this.msg = msg;
    this.results = results;
    this.pageInfo = pageInfo;
    this.status = status;
  }

  abstract response(): void;
}

export class SuccessRes extends StandarResponse {
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

export class ErrorRes extends StandarResponse {
  public response() {
    const data = {
      success: false,
      msg: this.msg,
    };
    if (
      this.results.code === "P2002" &&
      this.results.meta.target[0] === "email"
    ) {
      data.msg = "Email already registered";
    }
    if (
      this.results.code === "P2002" &&
      this.results.meta.target[0] === "username"
    ) {
      data.msg = "Username already used";
    }
    return this.res.status((this.status = 400)).json(data);
  }
}
