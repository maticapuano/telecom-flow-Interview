jest.mock("../services/openweathermap.service", () => {
  return {
    OpenWeatherMapService: jest.fn().mockImplementation(() => {
      return {
        GetWeatherByLocation: () => {
          return {
            city: "Fake city",
          };
        },
      };
    }),
  };
});

beforeEach(async () => {
  jest.clearAllMocks();
});
