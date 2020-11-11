import { loadControllers } from "awilix-express";
import express, { Application } from "express";
import registerContainer from "./container";

const app: Application = express();

const ROUTE_PREFIX = process.env.ROUTE_PREFIX || "/v1";

//Register containers
registerContainer(app);

//Load controllers
app.use(
  ROUTE_PREFIX,
  loadControllers("controllers/*/*.controller.ts", { cwd: __dirname })
);

export { app };
