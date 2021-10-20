import cors from "cors";
import Express, { NextFunction, Request, Response } from "express";
import { weatherRouter } from "./src/Controllers/WeatherController";
import { handleError } from "./src/handler/ExceptionHandler";

const app = Express();
var port = process.env.PORT || 8081;
app.use(cors());
app.use("/api/weather", weatherRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  handleError(err, res);
});
app.listen(8081, () => console.log("Http server started on port " + port));
