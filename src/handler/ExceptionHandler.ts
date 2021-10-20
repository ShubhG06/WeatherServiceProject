import { Request, Response } from "express";
import { Enums, STATUS_CODES } from "../Shared/Enums";

export default class ErrorHandler extends Error {
  public statusCode: number;
  public message: string;
  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
export const handleError = (err: any,response: Response) => {
  const { statusCode, message } = err;
  console.log(response);
  response.status(statusCode).json({
    status: Enums.ERROR,
    statusCode,
    message,
  });
};

export const ErrorCallback = (err: any) => {
  if (err) {
    return new ErrorHandler(STATUS_CODES.INTERNAL_SERVER_ERROR, err);
  }
};
