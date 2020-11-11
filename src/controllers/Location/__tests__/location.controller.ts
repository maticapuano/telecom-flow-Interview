import statusCode from "http-status";
import request from "supertest";
import { app } from "../../../app";

const ROUTE_PREFIX = "/v1";

it("Should return a 200", async () => {
  const response = await request(app).get(`${ROUTE_PREFIX}/location`);
  const { city } = response.body;

  expect(response.status).toEqual(statusCode.OK);
  expect(city).toBeDefined();
});
