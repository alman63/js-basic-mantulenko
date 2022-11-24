// вывод в консоль среднее арифметического всех нечётных чисел от 1 до N
export function average(N) {
  let s = 1;
  let count = 1;
  for (let i = 3; i <= N; i += 2) {
    s += i;
    count += 1;
  }
  console.log(
    "Среднее арифметическое нечетных чисел до ",
    N,
    " равно ",
    s / count
  );
  return s / count;
}
