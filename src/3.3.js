export function average(N) {
  let s = 0;
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 1) {
      s += i;
      count += 1;
    }
  }
  console.log(
    "Среднее арифметическое нечетных чисел до ",
    N,
    " равно ",
    s / count
  );
  return s / count;
}
let N = prompt("Введите целое число большее 1");
while (isNaN(Number(N)) || Number(N) === 0 || Number(N) < 0) {
  N = prompt("Повторите ввод, вы ввели не число");
}
average(N);
