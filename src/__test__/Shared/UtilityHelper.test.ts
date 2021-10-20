import { IWeatherDetail } from "../../Interfaces/IWeatherDetail";
import { isEmpty, mapWeatherData } from "../../Shared/UtilityHelper";
import { currentWeatherData } from "./__mocks__/mockData";

describe("UtilityHelper test cases", () => {
  test("Should returned the mapped data", () => {
    const expected: IWeatherDetail = {
      sunrise: 1634768093,
      sunset: 1634807926,
      temp: 283.46,
      humidity: 59,
      clouds: 100,
      wind_speed: 2.51,
      weather: [
        {
          main: "Rain",
          description: "light rain",
        },
      ],
    };
    expect(mapWeatherData(currentWeatherData)).toEqual(expected);
  });
  test("Should returned the empty mapped data if response is null", () => {
    expect(mapWeatherData(null)).toEqual({});
  });
  test("Should returned the empty mapped data if response is undefined", () => {
    expect(mapWeatherData(undefined)).toEqual({});
  });
  test("Should returned the empty mapped data if response is empty object", () => {
    expect(mapWeatherData({})).toEqual({});
  });
  test("Should returned false if object is valid", () => {
    expect(isEmpty({ test: "test" })).toBeFalsy();
  });
  test("Should returned true if object is invalid", () => {
    expect(isEmpty({})).toBeTruthy();
  });
});
