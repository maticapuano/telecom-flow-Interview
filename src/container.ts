import { createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import { Application } from "express";

export default (app: Application): void => {
  const container = createContainer({ injectionMode: "CLASSIC" });

  //Container register
  container.register({
    //Services
  });

  app.use(scopePerRequest(container));
};
