import { clickLi } from './clickLi';
export function addHistory(obj) {
    let arrHistory = JSON.parse(localStorage.getItem('history'));
    const ul = document.querySelector('.history__ul');
    //проверка первого сохранения localstorage в массив
    let history = arrHistory === null ? [] : [...arrHistory];
    //
    // проверка есть ли повторения в архиве поиска
    if (!history.includes(obj.name)) {
        // проверяем количество записей в истории
        if (history.length >= 10) {
            history = history.slice(1);
            document.querySelectorAll('li')[0].remove();
        }
        history.push(obj.name);
        localStorage.clear();
        localStorage.setItem('history', JSON.stringify(history));
        const li = document.createElement('li');
        li.innerText = obj.name;
        ul.appendChild(li);
        clickLi();
    }
}
