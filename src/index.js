import '../css/style.css';
import { getTemp } from './getTemp';
import { getInput } from './getInput';

localStorage.clear();
const resultT = await getTemp();
const content__result = document.querySelector('.content__result');
const pCity = document.createElement('p');
const pTemp = document.createElement('p');
const pIcon = document.createElement('img');
pCity.setAttribute('class', 'pCity');
pTemp.setAttribute('class', 'pTemp');
pIcon.setAttribute('class', 'icon');
pIcon.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${resultT.weather[0]['icon']}.png`
);
content__result.appendChild(pCity);
content__result.appendChild(pTemp);
content__result.appendChild(pIcon);
pCity.innerText = `${resultT.name}`;
pTemp.innerText = `Температура в городе: ${Math.ceil(
    resultT.main.temp - 273.15
)}°C`;
const map = document.querySelector('.map');
const img = document.createElement('img');
map.appendChild(img);
img.setAttribute('class', 'map_img');
img.setAttribute(
    'src',
    `https://static-maps.yandex.ru/1.x/?ll=${resultT.coord.lon},${resultT.coord.lat}8&size=400,300&amp&spn=0.016457,0.00619&l=map`
);
getInput();
