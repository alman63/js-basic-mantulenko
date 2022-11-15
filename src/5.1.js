export function createArr() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}

export function sumArr(arr) {
  return arr.reduce((sum, item) => sum + item, 0);
}
export function newArr(arr) {
  const arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    arrNew.push(arr[i] * 2);
  }
  return arrNew;
}
export function minMaxArr(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log("Минимальный элемент в массиве ", min);
  console.log("Максимальный элемент в массиве ", max);
  return [max, min];
}
