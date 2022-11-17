// определения введенного значения к определенному типу - дата, телефон, почта
export function testInput(str) {
  const regDate = /\d{1,2}[\.\/]\d{2}[\.\/]\d{2,4}/;
  const regMail = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
  const regTelefon =
    /\+\d[\s\(\-]{0,1}\d{3}[\s\)\-]{0,1}\d{3}[\s\-]{0,1}\d{2}[\s\-]{0,1}\d{2}/;
  let result;
  if (str === "") {
    alert("Повторите ввод, пустая строка");
  } else {
    if (regDate.test(str)) {
      result = "Вы ввели дату";
    } else if (regMail.test(str)) {
      result = "Вы ввели почту";
    } else if (regTelefon.test(str)) {
      result = "Вы ввели телефон";
    } else {
      result = "Ввод не определен";
    }
    alert(result);
    return result;
  }
}
