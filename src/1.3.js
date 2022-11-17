// функция расчета суммы цифр трехзначного числа
export function sum(a) {
  const result = Math.floor(a / 100) + Math.floor((a / 10) % 10) + (a % 10);
  console.log(result);
  alert(`Сумма цифр ${a} числа равна ${result}`);
  return result;
}
