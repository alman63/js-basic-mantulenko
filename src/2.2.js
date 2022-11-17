// функция определения месяца по введенному пользователем числу
export function month(a) {
  let m = "";
  switch (a) {
    case 1:
      m = "январь";
    case 2:
      m = "февраль";
      break;
    case 3:
      m = "март";
      break;
    case 4:
      m = "апрель";
      break;
    case 5:
      m = "май";
      break;
    case 6:
      m = "июнь";
      break;
    case 7:
      m = "июль";
      break;
    case 8:
      m = "август";
      break;
    case 9:
      m = "сентябрь";
      break;
    case 10:
      m = "октябрь";
      break;
    case 11:
      m = "ноябрь";
      break;
    case 12:
      m = "декабрь";
      break;
  }
  console.log(m);
  alert(`Числу ${a} соответсвует месяц ${m}`);
  return m;
}
