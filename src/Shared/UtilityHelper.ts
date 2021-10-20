import { IWeatherDetail } from "../Interfaces/IWeatherDetail";

export const isEmpty = (obj: any) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
};

export const mapWeatherData = (weatherData: any) => {
  if (!weatherData && isEmpty(weatherData)) {
    return {};
  }
  const weatherDetail: IWeatherDetail = {
    sunrise: weatherData?.sunrise,
    sunset: weatherData?.sunset,
    temp: weatherData?.temp,
    humidity: weatherData?.humidity,
    clouds: weatherData?.clouds,
    wind_speed: weatherData?.wind_speed,
    weather: weatherData?.weather?.map((weather: any) => ({
      main: weather?.main,
      description: weather?.description,
    })),
  };
  return weatherDetail;
};
