import { GET, route } from "awilix-express";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { IpApiService } from "../../services/IpApi.service";

@route("/location")
export class LocationController {
  constructor(private readonly ipApiService: IpApiService) {}

  @GET()
  async GetCurrentLocation(req: Request, res: Response): Promise<Response> {
    const currentIp = await this.ipApiService.GetDetailsByCurrentLocation();

    return res.status(httpStatus.OK).json(currentIp);
  }
}
