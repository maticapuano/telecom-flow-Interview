jest.mock("../services/openweathermap.service", () => {
  return {
    OpenWeatherMapService: jest.fn().mockImplementation(() => {
      return {
        GetWeatherByLocation: () => {
          return {
            city: "Fake city",
          };
        },
        GetForecastBy5Days: () => {
          return {
            cnt: 40,
            list: [],
          };
        },
      };
    }),
  };
});

beforeEach(async () => {
  jest.clearAllMocks();
});
