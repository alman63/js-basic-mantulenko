// создание массива
export function createArr() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}
// сумма элементов массива
export function sumArr(arr) {
  return arr.reduce((sum, item) => sum + item, 0);
}
// удвоенные элементы исходного массива записаны в новый
export function newArr(arr) {
  const arrNew = arr.map((element) => element * 2);
  return arrNew;
}

// минимальный и максимальный элемент массива
export function minMaxArr(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log("Минимальный элемент в массиве ", min);
  console.log("Максимальный элемент в массиве ", max);
  return [max, min];
}
