import { main } from "./lib";

describe("main", () => {
  it("runs", () => {
    expect(() => main()).not.toThrow();
  });
});
