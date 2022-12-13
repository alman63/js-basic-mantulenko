import { resetResult } from './resetResult';
export function clickLi() {
    const li = document.querySelectorAll('li');
    li.forEach((element) => {
        element.addEventListener('click', () => {
            resetResult(element.textContent);
        });
    });
}
