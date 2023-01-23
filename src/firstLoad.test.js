import { firstLoad } from './firstLoad';
import { getWeather } from './firstLoad';
import { createPage } from './firstLoad';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                coord: { lon: 50, lat: 53 },
                weather: [
                    {
                        id: 801,
                        main: 'Clouds',
                        description: 'few clouds',
                        icon: '02n',
                    },
                ],
                base: 'stations',
                main: {
                    temp: 255.56,
                    feels_like: 249.31,
                    temp_min: 255.56,
                    temp_max: 255.56,
                    pressure: 1045,
                    humidity: 91,
                    sea_level: 1045,
                    grnd_level: 1029,
                },
                visibility: 10000,
                wind: { speed: 2.49, deg: 110, gust: 2.51 },
                clouds: { all: 12 },
                dt: 1674231008,
                sys: { country: 'RU', sunrise: 1674189660, sunset: 1674219620 },
                timezone: 14400,
                id: 499068,
                name: 'Samara Oblast',
                cod: 200,
            }),
    })
);

describe(' Тестируем getWeather для Samara', () => {
    it('Тестируем getWeather', async () => {
        const temp = await getWeather('Samara');
        expect(temp).toEqual({
            coord: { lon: 50, lat: 53 },
            weather: [
                {
                    id: 801,
                    main: 'Clouds',
                    description: 'few clouds',
                    icon: '02n',
                },
            ],
            base: 'stations',
            main: {
                temp: 255.56,
                feels_like: 249.31,
                temp_min: 255.56,
                temp_max: 255.56,
                pressure: 1045,
                humidity: 91,
                sea_level: 1045,
                grnd_level: 1029,
            },
            visibility: 10000,
            wind: { speed: 2.49, deg: 110, gust: 2.51 },
            clouds: { all: 12 },
            dt: 1674231008,
            sys: { country: 'RU', sunrise: 1674189660, sunset: 1674219620 },
            timezone: 14400,
            id: 499068,
            name: 'Samara Oblast',
            cod: 200,
        });
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
describe(' Тестируем getWeather если запрос не сработал', () => {
    it('Тестируем getWeather результат Null', async () => {
        fetch.mockImplementationOnce(() => Promise.reject('API is down'));
        const temp = await getWeather('Samara');
        expect(temp).toEqual(null);
        expect(fetch).toHaveBeenCalledWith(
            'https://api.openweathermap.org/data/2.5/weather?q=Samara&appid=9131f66cd3745fc87830ad367b122a9c'
        );
    });
});

describe(' Тестируем createPage', () => {
    it('createPage', () => {
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
            '<div class="content__result"></div><div class="content__map"></div>';
        expect(createPage(weatherCity)).toBe(
            'https://static-maps.yandex.ru/1.x/?ll=50,53&size=400,300&amp&spn=2,2&l=map'
        );
    });
});
