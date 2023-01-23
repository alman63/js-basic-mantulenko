export function addHistory(str) {
    let arrHistory = JSON.parse(localStorage.getItem('history'));
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
