import { addHistory } from './addHistory';

describe(' Тестируем addHistory', () => {
    it('Если история чистая, то будет добавлен первый элемент', () => {
        expect(addHistory('Oslo')).toEqual(['Oslo']);
    });
    it('Если 10 запросов есть, длина массива истории больше 10 не будет', () => {
        const history = [
            'Saransk',
            'Penza',
            'Sarov',
            'Murom',
            'Ivanovo',
            'Rybinsk',
            'Vologda',
            'Tambov',
            'Lipetsk',
            'Питер',
        ];
        localStorage.setItem('history', JSON.stringify(history));
        expect(addHistory('Oslo').length).toBe(10);
    });
    it('Если 8 запросов есть, длина массива будет 9', () => {
        const history = [
            'Saransk',
            'Penza',
            'Sarov',
            'Murom',
            'Ivanovo',
            'Rybinsk',
            'Vologda',
            'Tambov',
        ];
        localStorage.setItem('history', JSON.stringify(history));
        expect(addHistory('Oslo').length).toBe(9);
    });
    it('Если 0 запросов есть, длина массива будет 1', () => {
        const history = [];
        localStorage.setItem('history', JSON.stringify(history));
        expect(addHistory('Oslo').length).toBe(1);
    });
    it('Если в истории есть Oslo, длина массива не изменится', async () => {
        const history = ['Oslo'];
        localStorage.setItem('history', JSON.stringify(history));
        expect(addHistory('Oslo').length).toBe(1);
    });
});
