import express, { Application } from "express";

const app: Application = express();

const ROUTE_PREFIX = process.env.ROUTE_PREFIX || "/v1";

app.use(ROUTE_PREFIX, (req, res) => {
  res.json({ work: true });
});

export { app };
