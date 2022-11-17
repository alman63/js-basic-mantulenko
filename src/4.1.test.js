import { userAddAge, copyUser, destructuring } from "./4.1";
// проверка записи возраста
describe(" Add user age", () => {
  it(" Add age 17 ", () => {
    expect(userAddAge(17)).toBe(17);
  });
  it(" Add age 6 ", () => {
    expect(userAddAge(6)).toBe(6);
  });
  it(" Add age 100 ", () => {
    expect(userAddAge(100)).toBe(100);
  });
});
const user = {
  name: "John",
  age: 18,
};

// проверка создания пользователя admin от user
describe(" Add admin", () => {
  it("check property name", () => {
    expect(copyUser(user).name).toBe(user.name);
  });
  it("check property age", () => {
    expect(copyUser(user).age).toBe(user.age);
  });
  it("check property role", () => {
    expect(copyUser(user).role).toBe("admin");
  });
});
const admin = copyUser(user);

// проверка destructuring объекта
describe("destructuring admin", () => {
  it("check variable name", () => {
    expect(destructuring(admin)[0]).toBe("John");
  });
  it("check variable age", () => {
    expect(destructuring(admin)[1]).toBe(18);
  });
  it("check variable role", () => {
    expect(destructuring(admin)[2]).toBe("admin");
  });
});
