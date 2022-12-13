import { getCoords } from './getCoords';

async function getTemp() {
    const resultT = await getCoords();
    try {
        const getTemperature = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${resultT.latitude}&lon=${resultT.longitude}&lang=ru&appid=9131f66cd3745fc87830ad367b122a9c`
        );
        let jsonT = await getTemperature.json();
        return jsonT;
        // [Math.ceil(jsonT.main.temp - 273.15), result[2]];
    } catch (err) {
        return null;
    }
}

export { getTemp };
