import { asClass, createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import { Application } from "express";
import { IpApiService } from "./services/IpApi.service";
import { TestService } from "./services/test.service";

export default (app: Application): void => {
  const container = createContainer({ injectionMode: "CLASSIC" });

  //Container register
  container.register({
    //Services
    testService: asClass(TestService).scoped(),
    ipApiService: asClass(IpApiService).scoped(),
  });

  app.use(scopePerRequest(container));
};
