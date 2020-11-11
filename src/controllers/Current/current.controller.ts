import { GET, route } from "awilix-express";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { IpApiService } from "../../services/IpApi.service";
import { OpenWeatherMapService } from "../../services/openweathermap.service";

@route("/current")
export class CurrentController {
  constructor(
    private readonly ipApiService: IpApiService,
    private readonly openWeatherMapService: OpenWeatherMapService
  ) {}

  @route("/:city?")
  @GET()
  public async GetCurrentCity(req: Request, res: Response): Promise<Response> {
    const city = req.params.city
      ? req.params.city
      : (await this.ipApiService.GetDetailsByCurrentLocation()).city;

    const weather = await this.openWeatherMapService.GetWeatherByLocation(city);

    return res.status(httpStatus.OK).json(weather);
  }
}
