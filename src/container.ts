import { asClass, createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import { Application } from "express";
import { TestService } from "./services/test.service";

export default (app: Application): void => {
  const container = createContainer({ injectionMode: "CLASSIC" });

  //Container register
  container.register({
    //Services
    testService: asClass(TestService).scoped(),
  });

  app.use(scopePerRequest(container));
};
