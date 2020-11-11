import axios, { AxiosResponse } from "axios";

export type Method =
  | "GET"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "POST"
  | "PUT"
  | "PATCH"
  | "PURGE"
  | "LINK"
  | "UNLINK";

export class UseRequestService {
  public async Request(
    url: string,
    method: Method,
    data?: any
  ): Promise<AxiosResponse> {
    try {
      const response = await axios.request({
        url,
        method,
        data,
      });

      return response as AxiosResponse;
    } catch (error: any) {
      return error.response;
    }
  }
}
