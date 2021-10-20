import { Router, Request, Response, NextFunction } from "express";
import ErrorHandler from "../handler/ExceptionHandler";
import { getWeatherReport } from "../Provider/DataProvider";
import { STATUS_CODES } from "../Shared/Enums";
import { QUERY_PARAMS_MANDATORY } from "../Shared/ErrorMessages";
export const weatherRouter = Router();

weatherRouter.get(
  "/getWeatherReport/:latitude/:longitude",
  async (request: Request, response: Response, next: NextFunction) => {
    const latitude: string = request.params?.latitude;
    const longitude: string = request.params?.longitude;
    if (latitude && longitude) {
      const weatherData = await getWeatherReport(latitude, longitude);
      response.status(STATUS_CODES.SUCCESS).send(weatherData);
    } else {
      response.send(
        new ErrorHandler(STATUS_CODES.NOT_FOUND, QUERY_PARAMS_MANDATORY)
      );
    }
  }
);
