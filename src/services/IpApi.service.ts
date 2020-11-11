import axios from "axios";
import { IpiApiResponseInterface } from "../interfaces/IpiApi.interface";

export class IpApiService {
  private readonly uriIpApi = "http://ip-api.com/json/";

  public async GetDetailsByCurrentLocation(): Promise<IpiApiResponseInterface> {
    const request = await axios.get(this.uriIpApi);

    return request.data as IpiApiResponseInterface;
  }
}
