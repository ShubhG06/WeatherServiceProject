import { getHeaders } from "../../Shared/ConfigWrapper";

describe("ConfigWrapper test cases", () => {
  test("Should get return defaulted header if parameter is undefined", () => {
    const expected = {
      Accept: "application/json, text/plain",
      "Content-type": "application/json",
    };
    expect(getHeaders(undefined)).toEqual(expected);
  });
  test("Should get return defaulted header and custom headers if paramter is not undefined or empty", () => {
    const expected = {
      Accept: "application/json, text/plain",
      "Content-type": "application/json",
      testHeader: "test",
    };
    const customHeader = {
      testHeader: "test",
    };
    expect(getHeaders(customHeader)).toEqual(expected);
  });
});
