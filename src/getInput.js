import { addHistory } from './addHistory';
import { getWeather } from './firstLoad';

function resetResult(dataWeather) {
    const cityName = document.querySelector('.cityName');
    const cityTemp = document.querySelector('.cityTemp');
    const imgIcon = document.querySelector('.icon');
    const img = document.querySelector('.content__map_img');
    if (dataWeather.cod == '404' || dataWeather.cod == '400') {
        cityName.innerText = 'Введите повторно - нет такого города в базе';
        cityTemp.innerText = '';
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
        return `Город: ${dataWeather.name}`;
    }
}
export { resetResult };

function addLi(str) {
    const arrli = document.querySelectorAll('li');
    let count = 0;
    //проверяем есть ли повторения в списке
    arrli.forEach((element) => {
        if (element.textContent === str) {
            count += 1;
        }
    });
    //если повторений нет - то добаввляем в список
    if (count === 0) {
        if (arrli.length > 9) {
            arrli[0].remove(); // удаляем первый из списка
        }
        // let ul = document.querySelector('.history__ul');
        const li = document.createElement('li');
        li.innerText = str;
        li.addEventListener('click', () => {
            resetResult(li.textContent);
        });
        document.querySelector('.history__ul').appendChild(li);
    }
    return arrli;
}
export { addLi };
function getInput() {
    const form = document.querySelector('.search__form');
    form.addEventListener('submit', async (form) => {
        form.preventDefault();
        const str = document.querySelector('.search__form_input').value;
        const dataWeather = await getWeather(str);
        resetResult(dataWeather);
        document.querySelector('.search__form_input').value = '';
    });
}

export { getInput };
