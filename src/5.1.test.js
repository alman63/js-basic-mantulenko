import { createArr , sumArr , newArr , minMaxArr } from "./5.1";

describe("createArr", () => {
  it("размер массива 10", () => {
    expect(createArr().length).toBe(10);
  });
  it("элементы массива числа", () => {
    expect(typeof createArr()[0]).toBe("number");
  });
});

describe("sumArr", () => {
  it("Сумма массива [1,2,3] равна 6", () => {
    expect(sumArr([1, 2, 3])).toBe(6);
  });
  it("Сумма массива [0] равна 0 ", () => {
    expect(sumArr([0])).toBe(0);
  });
});

describe("newArr", () => {
  it("От массива [1,2,3] ожидаем [2,4,6]", () => {
    expect(newArr([1, 2, 3])).toEqual([2, 4, 6]);
  });
  it("От массива [0] ожидаем [0] ", () => {
    expect(newArr([0])).toEqual([0]);
  });
});

describe("minMaxArr", () => {
  it("От массива [1,2,3] min равен 1, max 3", () => {
    expect(minMaxArr([1, 2, 3])).toEqual([3, 1]);
  });
  it("От массива [1,2,3,8,-6] min равен -6, max 8", () => {
    expect(minMaxArr([1, 2, 3, 8, -6])).toEqual([8, -6]);
  });
});
