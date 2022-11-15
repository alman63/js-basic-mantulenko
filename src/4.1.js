export function userAddAge(N) {
  const user = {
    name: "John",
    age: N,
  };
  return user.age;
}
export function copyUser(user) {
  const admin = {};
  const objArr = Object.entries(user);
  for (let i = 0; i < objArr.length; i++) {
    admin[`${objArr[i][0]}`] = objArr[i][1];
  }
  admin.role = "admin";
  return admin;
}

export function destructuring(admin) {
  const { name, age, role } = admin;
  return [name, age, role];
}
