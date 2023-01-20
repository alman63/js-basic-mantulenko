import { getInput } from './getInput';

async function getGeo() {
    try {
        const result = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const data = await result.json();
        return data;
    } catch (err) {
        return null;
    }
}
async function getWeather(city) {
    try {
        const getWeath = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9131f66cd3745fc87830ad367b122a9c`
        );
        let weather = await getWeath.json();
        return weather;
    } catch (err) {
        return null;
    }
}
export { getWeather };

async function createPage(weatherCity) {
    const content__result = document.querySelector('.content__result');
    const cityName = document.createElement('p');
    const cityTemp = document.createElement('p');
    const imgIcon = document.createElement('img');
    cityName.setAttribute('class', 'cityName');
    cityTemp.setAttribute('class', 'cityTemp');
    imgIcon.setAttribute('class', 'icon');
    imgIcon.setAttribute(
        'src',
        `http://openweathermap.org/img/wn/${weatherCity.weather[0]['icon']}.png`
    );
    content__result.appendChild(cityName);
    content__result.appendChild(cityTemp);
    content__result.appendChild(imgIcon);
    cityName.innerText = `Ваш город ${weatherCity.name}`;
    cityTemp.innerText = `Температура в городе: ${Math.ceil(
        weatherCity.main.temp - 273.15
    )}°C`;
    const map = document.querySelector('.content__map');
    const img = document.createElement('img');
    map.appendChild(img);
    img.setAttribute('class', 'content__map_img');
    img.setAttribute(
        'src',
        `https://static-maps.yandex.ru/1.x/?ll=${weatherCity.coord['lon']},${weatherCity.coord['lat']}&size=400,300&amp&spn=2,2&l=map`
    );
}
async function firstLoad() {
    const localHistory = JSON.parse(localStorage.getItem('history'));
    if (localHistory === null) {
        let resultCity = await getGeo();
        let dataWeather = await getWeather(resultCity.city);
        createPage(dataWeather);
    } else {
        let resultCity = localHistory.at(-1);
        let dataWeather = await getWeather(resultCity);
        createPage(dataWeather);
    }
    getInput();
}

export { firstLoad };
