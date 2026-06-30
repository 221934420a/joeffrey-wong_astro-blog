export async function getTamsuiWeather() {
    const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=25.1719&longitude=121.4434&current=temperature_2m,relative_humidity_2m,weather_code"
    );

    const data = await res.json();

    return {
        temp: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        weatherCode: data.current.weather_code,
    };
}