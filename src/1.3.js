// функция расчета суммы цифр трехзначного числа
export function sum(a) {
  const result = a
    .toString()
    .split("")
    .reduce((s, item) => s + Number(item), 0);
  console.log(result);
  alert(`Сумма цифр ${a} числа равна ${result}`);
  return result;
}
