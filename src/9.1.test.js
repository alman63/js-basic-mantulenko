import { triangle } from "./9.1";

describe("triangle", () => {
  it(" Проверяем треугольник со сторонами: 3,4,5", () => {
    expect(triangle(3, 4, 5)).toBe(true);
  });
  it(" Проверяем треугольник со сторонами: 0,0,0", () => {
    expect(triangle(0, 0, 0)).toBe(false);
  });
  it(" Проверяем треугольник со сторонами: 5,0,5", () => {
    expect(triangle(5, 0, 5)).toBe(false);
  });
  it(" Проверяем треугольник со сторонами: 1,1,2", () => {
    expect(triangle(1, 1, 2)).toBe(false);
  });
});
