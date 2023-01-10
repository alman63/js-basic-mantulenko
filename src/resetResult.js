import { setCity } from './setCity';
import { addHistory } from './addHistory';

async function resetResult(city) {
    const json = await setCity(city);
    const pTemp = document.querySelector('.pTemp');
    const pCity = document.querySelector('.pCity');
    const imgIcon = document.querySelector('.icon');
    const img = document.querySelector('.content__map_img');
    if (json.cod == '404') {
        pCity.innerText = `Введите повторно - нет такого города в базе`;
        pTemp.innerText = ``;
        img.setAttribute(
            'src',
            `https://avatars.mds.yandex.net/i?id=8b74ba27269a7cf022fefea25f692daef9623322-4340501-images-thumbs&n=13`
        );
        return 'Введите повторно - нет такого города в базе';
    } else {
        pCity.innerText = `Ваш город: ${json.name}`;
        pTemp.innerText = `Температура в Вашем городе: ${Math.ceil(
            json.main.temp - 273.15
        )}°C`;
        imgIcon.setAttribute(
            'src',
            `http://openweathermap.org/img/wn/${json.weather[0]['icon']}.png`
        );
        img.setAttribute(
            'src',
            `https://static-maps.yandex.ru/1.x/?ll=${json.coord.lon},${json.coord.lat}8&size=400,300&amp&spn=2,2&l=map`
        );
        addHistory(json);
        return `Ваш город ${json.name}`;
    }
}

export { resetResult };
