import '../css/style.css';
import { getWeather } from './getWeather';
import { getGeo } from './getGeo';
// import { getInput } from './getInput';

localStorage.clear();
const city = getGeo();
const weatherCity = await getWeather(city);
const content__result = document.querySelector('.content__result');
const pCity = document.createElement('p');
const pTemp = document.createElement('p');
const pIcon = document.createElement('img');
pCity.setAttribute('class', 'pCity');
pTemp.setAttribute('class', 'pTemp');
pIcon.setAttribute('class', 'icon');
pIcon.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${weatherCity.weather[0]['icon']}.png`
);
content__result.appendChild(pCity);
content__result.appendChild(pTemp);
content__result.appendChild(pIcon);
pCity.innerText = `${weatherCity.name}`;
pTemp.innerText = `Температура в городе: ${Math.ceil(
    weatherCity.main.temp - 273.15
)}°C`;
const map = document.querySelector('.content__map');
const img = document.createElement('img');
map.appendChild(img);
img.setAttribute('class', 'content__map_img');
img.setAttribute(
    'src',
    `https://static-maps.yandex.ru/1.x/?ll=${weatherCity.coord.lon},${weatherCity.coord.lat}8&size=400,300&amp&spn=0.016457,0.00619&l=map`
);
// getInput();
