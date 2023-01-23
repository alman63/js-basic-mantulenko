/*
Функци addHistory принимает строковый параметр - название города, и в зависимости от истории
запросов пользователя добавляет в local storage данный город. Количество запросов в истории не может 
быть больше 10, функция удаляет первый из масссива, если запросов больше.
Возвращает массив запросов.

*/

export function addHistory(str) {
    const arrHistory = JSON.parse(localStorage.getItem('history'));
    let history = arrHistory === null ? [] : [...arrHistory];
    if (!history.includes(str)) {
        // проверяем количество записей в истории
        history = history.length >= 10 ? (history = history.slice(1)) : history;
        history.push(str);
        localStorage.setItem('history', JSON.stringify(history));
        return history;
    } else {
        return history;
    }
}
