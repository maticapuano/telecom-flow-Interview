import { ForecastOpenweathermapInterface } from "../interfaces/forecastOpenweathermap.Interface";
import { OpenweathermapInterface } from "../interfaces/openweathermap.interface";
import { UseRequestService } from "./use-request.service";

export class OpenWeatherMapService {
  private readonly uri = `https://api.openweathermap.org/data/2.5`;
  private readonly OPENWEATHERMAP_KEY = process.env.OPENWEATHERMAP_KEY;

  constructor(private readonly useRequest: UseRequestService) {}

  public async GetWeatherByLocation(
    location: string
  ): Promise<OpenweathermapInterface> {
    const { data } = await this.useRequest.Request(
      `${this.uri}/weather?q=${location}&appid=${this.OPENWEATHERMAP_KEY}&units=metric`,
      "GET"
    );

    return data as OpenweathermapInterface;
  }

  public async GetForecastBy5Days(
    location: string
  ): Promise<ForecastOpenweathermapInterface> {
    const { data } = await this.useRequest.Request(
      `${this.uri}/forecast?q=${location}&appid=${this.OPENWEATHERMAP_KEY}&units=metric`,
      "GET"
    );

    return data as ForecastOpenweathermapInterface;
  }
}
