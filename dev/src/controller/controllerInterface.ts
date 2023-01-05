import { Request, Response } from "express";
import { type } from "os";

type TController = {
  success: object;
  error: object;
};

export default TController;
