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
