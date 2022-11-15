import { isWord } from "./6.2";

describe("isWord", () => {
  it("Для строки :нетпробелов  - результат true", () => {
    expect(isWord("нетпробелов")).toBe(true);
  });
  it("Для строки :нет пробелов  - результат false", () => {
    expect(isWord("нет пробелов")).toBe(false);
  });
  it("Для строки : привет   - результат true", () => {
    expect(isWord(" привет ")).toBe(true);
  });
  it("Для пустой строки - результат false", () => {
    expect(isWord("")).toBe(false);
  });
});
