import { sumLength } from "./1.2";

describe("sumLength", () => {
  it("a= '' b = 'qwert'", () => {
    expect(sumLength("", "qwert")).toBe(5);
  });
  it(" a='' b ='' ", () => {
    expect(sumLength("", "")).toBe(0);
  });
  it(" a='GHn' b ='OPM' ", () => {
    expect(sumLength("GHn", "OPM")).toBe(6);
  });
});
