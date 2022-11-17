export function countSecond(data) {
  console.log(
    data.getHours() * 3600 + data.getMinutes() * 60 + data.getSeconds()
  );
  return data.getHours() * 3600 + data.getMinutes() * 60 + data.getSeconds();
}
