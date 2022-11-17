// вывод в консоль среднее арифметического всех нечётных чисел от 1 до N
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
