async function getGeo() {
    try {
        const result = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const data = await result.json();
        return data.city;
    } catch (err) {
        return null;
    }
}

export { getGeo };
