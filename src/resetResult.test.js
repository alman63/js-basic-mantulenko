import { resetResult } from './resetResult';

describe('Тестируем resetResult', () => {
    it('Если мы ввели город не правильно получаем ошибку', () => {
        expect(resetResult('Самара')).toBe(
            'Введите повторно - нет такого города в базе'
        );
    });
});
