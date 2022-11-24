// подсчет количества секунд с начала дня
export function countSecond(data) {
  const countS =
    data.getHours() * 3600 + data.getMinutes() * 60 + data.getSeconds();
  console.log(countS);
  return countS;
}
