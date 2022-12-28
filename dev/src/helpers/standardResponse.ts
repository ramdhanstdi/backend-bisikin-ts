import { Response } from "express";

export const response = (
  res: Response,
  msg: string,
  result: any,
  pageInfo: object,
  status: number = 200
) => {
  interface Data {
    success: boolean;
    message: string;
    pageInfo: object;
    result: any;
  }

  const data: Data = {
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
