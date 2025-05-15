const apiKey = "a5ce3836a0dd866f5eb67609ef6cb042";
const city = "Kyiv";

async function getWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`
        );
        if (!response.ok) throw new Error("Не вдалося отримати дані.");
        const data = await response.json();
        document.getElementById("temp").textContent = data.main.temp.toFixed(1);
        document.getElementById("desc").textContent = data.weather[0].description;
    } catch (error) {
        alert("Помилка при завантаженні погоди: " + error.message);
    }
}

window.onload = getWeather;