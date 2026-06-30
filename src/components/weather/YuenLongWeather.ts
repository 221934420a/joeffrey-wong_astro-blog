export async function getYuenLongWeather() {
    const res = await fetch(
        "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc"
    );

    const data = await res.json();

    const station = data.temperature.data.find(
        (item: any) => item.place === "元朗公園"
    );

    return {
        temp: station?.value,
        humidity: data.humidity.data[0].value,
        updateTime: data.updateTime,
    };
}