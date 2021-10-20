import { IWeatherReport } from "./IWeatherReport";

export interface IWeatherDetail{
    sunrise:number,
    sunset:number,
    temp:number,
    humidity:number,
    clouds:number,
    wind_speed:number,
    weather: Array<IWeatherReport>
}