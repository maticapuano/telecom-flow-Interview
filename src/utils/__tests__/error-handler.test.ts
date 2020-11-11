import { errorHandler } from "../error-handler";

it("Should instance of function", () => {
  expect(errorHandler).toBeInstanceOf(Function);
});
