// проерка состоит ли строка из одного слова
export function isWord(str) {
  const arr = str.split(" ");
  if (arr.length === 1 && arr[0] !== "") {
    return true;
  }
  if (arr.length === 3 && arr[0] === "" && arr[2] === "") {
    return true;
  }
  if (arr.length === 2 && (arr[0] === " " || arr[2] === " ")) {
    return true;
  }
  return false;
}
