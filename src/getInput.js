import { addHistory } from './addHistory';
import { getWeather } from './firstLoad';

async function resetResult(city) {
    const dataWeather = await getWeather(city);
    const cityName = document.querySelector('.cityName');
    const cityTemp = document.querySelector('.cityTemp');
    const imgIcon = document.querySelector('.icon');
    const img = document.querySelector('.content__map_img');
    if (dataWeather.cod == '404') {
        cityName.innerText = `Введите повторно - нет такого города в базе`;
        cityTemp.innerText = ``;
        imgIcon.style.display = 'none';
        img.setAttribute(
            'src',
            `https://avatars.mds.yandex.net/i?id=8b74ba27269a7cf022fefea25f692daef9623322-4340501-images-thumbs&n=13`
        );
        return 'Введите повторно - нет такого города в базе';
    } else {
        cityName.innerText = `Город: ${dataWeather.name}`;
        cityTemp.innerText = `Температура в городе: ${Math.ceil(
            dataWeather.main.temp - 273.15
        )}°C`;
        imgIcon.style.display = 'inline';
        imgIcon.setAttribute(
            'src',
            `http://openweathermap.org/img/wn/${dataWeather.weather[0]['icon']}.png`
        );
        img.setAttribute(
            'src',
            `https://static-maps.yandex.ru/1.x/?ll=${dataWeather.coord.lon},${dataWeather.coord.lat}8&size=400,300&amp&spn=2,2&l=map`
        );
        addHistory(dataWeather.name);
        addLi(dataWeather.name);
        return `Ваш город ${dataWeather.name}`;
    }
}
export { resetResult };

function addLi(str) {
    const arrli = document.querySelectorAll('li');
    let count = 0;
    arrli.forEach((element) => {
        if (element.textContent === str) {
            count += 1;
        }
    });
    console.log(count);
    if (count === 0) {
        const ul = document.querySelector('.history__ul');
        const li = document.createElement('li');
        li.innerText = str;
        li.addEventListener('click', () => {
            resetResult(li.textContent);
        });
        ul.appendChild(li);
    }
}

export function getInput() {
    const form = document.querySelector('.search__form');
    form.addEventListener('submit', (form) => {
        form.preventDefault();
        const str = document.querySelector('.search__form_input').value;
        resetResult(str);
        document.querySelector('.search__form_input').value = '';
    });
}
