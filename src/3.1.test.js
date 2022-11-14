import { sumNumber } from "./3.1";

describe("sumNumber", () => {
  it("Сумма равна", () => {
    expect(sumNumber()).toEqual(3825);
  });
});
