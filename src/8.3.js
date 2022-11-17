// определения более молодого по дате рождения
export function whoIsYoung(data1, data2) {
  const arr = data1.split(".");
  const arrNew = [arr[1], arr[0], arr[2]];
  const data1New = arrNew.join(".");
  const correctDate1 = new Date(data1New);
  const arr2 = data2.split(".");
  const arrNew2 = [arr2[1], arr2[0], arr2[2]];
  const data2New = arrNew2.join(".");
  const correctDate2 = new Date(data2New);
  // Преобразовали две даны в формат мм.дд.гггг
  const now = new Date();
  if (now - correctDate1 === now - correctDate2) {
    return "Они родились в один день";
  }
  if (now - correctDate1 > now - correctDate2) {
    return "Второй моложе";
  }
  return "Первый моложе";
}
