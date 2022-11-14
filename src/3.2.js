export function tableMulti(a) {
  for (let i = 1; i <= 9; i++) {
    console.log(` ${a} * `, i, " = ", a * i);
  }
  return a * 9;
}
