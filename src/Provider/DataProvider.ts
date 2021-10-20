import { weatherReportUrl } from "../Shared/ApiEndpoint";
import { Enums } from "../Shared/Enums";
import { httpRequest } from "../Shared/HttpClient";
import { mapWeatherData } from "../Shared/UtilityHelper";

export const getWeatherReport = async (latitude: string, longitude: string) => {
  const weatherReport: any = await httpRequest(
    weatherReportUrl(latitude, longitude),
    Enums.GET
  );
  return mapWeatherData(weatherReport?.data?.current);
};
