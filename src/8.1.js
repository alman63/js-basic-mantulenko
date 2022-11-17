export function dayWeek(data) {
  const arr = data.split(".");
  const arrNew = [arr[1], arr[0], arr[2]];
  const dataNew = arrNew.join(".");
  const correctDate = new Date(dataNew);
  const n = correctDate.getDay();
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  return days[n];
}
