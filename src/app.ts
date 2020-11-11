import { loadControllers } from "awilix-express";
import express, { Application, NextFunction, Request, Response } from "express";
import registerContainer from "./container";
import { errorHandler } from "./utils/error-handler";

const app: Application = express();

//Register containers
registerContainer(app);

//Load controllers
app.use(
  "/v1",
  loadControllers("controllers/*/*.controller.ts", { cwd: __dirname })
);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  return next(new Error("Page not found"));
});

app.use(errorHandler);

export { app };
