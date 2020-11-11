import request from "supertest";
import { app } from "../../../app";

const ROUTE_PREFIX = "/v1";

it("Should return a 200", async () => {
  const response = await request(app).get(`${ROUTE_PREFIX}/forecast`);

  expect(response.status).toEqual(200);
  expect(response.body.cnt).toEqual(40);
});
