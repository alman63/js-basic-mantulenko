// проерка состоит ли строка из одного слова
export function isWord(str) {
  const arr = str.trim().split(" ");
  return arr.length === 1 && arr[0] !== "";
}
