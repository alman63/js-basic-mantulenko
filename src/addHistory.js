import { resetResult } from './getInput';

export function addHistory(str) {
    let arrHistory = JSON.parse(localStorage.getItem('history'));
    let history = arrHistory === null ? [] : [...arrHistory];
    if (!history.includes(str)) {
        // проверяем количество записей в истории
        if (history.length >= 10) {
            history = history.slice(1);
            document.querySelectorAll('li')[0].remove();
        }
        history.push(str);
        localStorage.setItem('history', JSON.stringify(history));
    }
}
