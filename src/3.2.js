// функция вывода таблицы умножения определенной цифры
export function tableMulti(a) {
  let s = "";
  for (let i = 1; i <= 9; i++) {
    s += ` ${a} * ${i} = ${  a * i  }\n`;
  }
  console.log(s);
  return s;
}
