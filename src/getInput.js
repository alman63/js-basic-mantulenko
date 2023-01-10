import { resetResult } from './resetResult';

export function getInput() {
    const button = document.querySelector('.search__form_buttom');
    button.addEventListener('click', () => {
        const str = document.querySelector('.search__form_input').value;
        resetResult(str);
    });
}
