import axios from "axios"
import { getHeaders } from "./ConfigWrapper";

export const httpRequest = async (
    url: string,
    requestMethod: string | any,
    data?: object | undefined,
    config?: object | undefined,
    params?: object | undefined
   
  ) => {
    return axios({
      url,
      method: requestMethod,
      data,
      params,
      headers: getHeaders(config)
    });
  };

  