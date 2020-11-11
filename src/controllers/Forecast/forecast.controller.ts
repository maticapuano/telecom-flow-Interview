import { GET, route } from "awilix-express";
import { OpenWeatherMapService } from "../../services/openweathermap.service";
import httpStatus from "http-status";
import { Request, Response } from "express";
import { IpApiService } from "../../services/IpApi.service";

@route("/forecast")
export class ForecastController {
  constructor(
    private readonly ipApiService: IpApiService,
    private readonly openWeatherMapService: OpenWeatherMapService
  ) {}

  @route("/:city?")
  @GET()
  public async GetForecastBy5Days(
    req: Request,
    res: Response
  ): Promise<Response> {
    const city = req.params.city
      ? req.params.city
      : (await this.ipApiService.GetDetailsByCurrentLocation()).city;

    const forecast = await this.openWeatherMapService.GetForecastBy5Days(city);

    return res.status(httpStatus.OK).json(forecast);
  }
}
