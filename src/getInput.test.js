import { addLi } from './getInput';
import { resetResult } from './getInput';

describe(' Тестируем addLi ', () => {
    it('Если есть уже 10 записей, то 11 не будет', () => {
        document.body.innerHTML =
            '<ul class="history__ul"> <li>Moscow</li><li>Moscow</li><li>Moscow</li><li>Moscow</li><li>Moscow</li><li>Moscow</li><li>Moscow</li><li>Moscow</li><li>Moscow</li><li>Moscow</li>' +
            '</ul>';
        expect(addLi('Samara').length).toBe(10);
    });
    it('Если есть повторения, не будет добавлен город', () => {
        document.body.innerHTML =
            '<ul class="history__ul"> <li>Samara</li><li>samaa</li><li>Moscow</li><li>Moscow</li><li>Moscow</li><li>Moscow</li><li>Moscow</li><li>Moscow</li><li>Moscow</li><li>Moscow</li>' +
            '</ul>';
        expect(addLi('Samara').length).toBe(10);
    });
});

describe(' Тестируем resetResult ', () => {
    it('После выполнения функции получаем строку с названием города', () => {
        const weatherCity = {
            coord: { lon: 50, lat: 53 },
            weather: [
                {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d',
                },
            ],
            base: 'stations',
            main: {
                temp: 256.76,
                feels_like: 252.63,
                temp_min: 256.76,
                temp_max: 256.76,
                pressure: 1048,
                humidity: 93,
                sea_level: 1048,
                grnd_level: 1033,
            },
            visibility: 10000,
            wind: { speed: 1.53, deg: 232, gust: 1.4 },
            clouds: { all: 98 },
            dt: 1674454413,
            sys: { country: 'RU', sunrise: 1674448643, sunset: 1674479141 },
            timezone: 14400,
            id: 499068,
            name: 'Samara',
            cod: 200,
        };
        document.body.innerHTML =
            '<div class="content__result"><p class="cityName"><p class="cityTemp"></p></p><img class="icon" ></div><div class="content__map"><img class="content__map_img" ></div><ul class="history__ul"><li>Moscow</li><li>Питер</li><li>Солнце</li></ul>';
        expect(resetResult(weatherCity)).toBe('Город: Samara');
    });
    it('После выполнения функции получаем строку с названием города', () => {
        const weatherCity = {
            coord: { lon: 37.6156, lat: 55.7522 },
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d',
                },
            ],
            base: 'stations',
            main: {
                temp: 269.69,
                feels_like: 266.81,
                temp_min: 268.79,
                temp_max: 270.39,
                pressure: 1043,
                humidity: 95,
                sea_level: 1043,
                grnd_level: 1023,
            },
            visibility: 10000,
            wind: { speed: 1.9, deg: 140, gust: 3.1 },
            clouds: { all: 79 },
            dt: 1674464515,
            sys: {
                type: 2,
                id: 2000314,
                country: 'RU',
                sunrise: 1674452368,
                sunset: 1674481361,
            },
            timezone: 10800,
            id: 524901,
            name: 'Moscow',
            cod: 200,
        };
        document.body.innerHTML =
            '<div class="content__result"><p class="cityName"><p class="cityTemp"></p></p><img class="icon" ></div><div class="content__map"><img class="content__map_img" ></div><ul class="history__ul"><li>Moscow</li><li>Питер</li><li>Солнце</li></ul>';
        expect(resetResult(weatherCity)).toBe('Город: Moscow');
    });
    it('При плохом запросе получаем - Введите повторно - нет такого города в базе', () => {
        const weatherCity = { cod: '404', message: 'city not found' };
        document.body.innerHTML =
            '<div class="content__result"><p class="cityName"><p class="cityTemp"></p></p><img class="icon" ></div><div class="content__map"><img class="content__map_img" ></div><ul class="history__ul"><li>Moscow</li><li>Питер</li><li>Солнце</li></ul>';
        expect(resetResult(weatherCity)).toBe(
            'Введите повторно - нет такого города в базе'
        );
    });
});
