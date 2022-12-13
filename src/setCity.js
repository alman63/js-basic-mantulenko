async function setCity(str) {
    try {
        const getTemp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${str}&appid=9131f66cd3745fc87830ad367b122a9c`
        );
        let jsonT = await getTemp.json();
        return jsonT;
    } catch (err) {
        return null;
    }
}
export { setCity };
