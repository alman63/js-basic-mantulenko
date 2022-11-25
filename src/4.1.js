// запись значения возраста пользователя
export function userAddAge(N) {
  const user = {
    name: "John",
    age: N,
  };
  alert(`Пользователю user добывлено свойство age со сначение ${user.age}`);
  return user.age;
}
// создание копии пользователя user
export function copyUser(user) {
  const admin = { ...user };
  admin.role = "admin";
  return admin;
}
// предача значений свойств объекта в переменные(в массив)
export function destructuring(admin) {
  const { name, age, role } = admin;
  return [name, age, role];
}
