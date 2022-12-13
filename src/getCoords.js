async function getCoords() {
    try {
        const result = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const data = await result.json();
        return data;
    } catch (err) {
        return null;
    }
}

export { getCoords };
