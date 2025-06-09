document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const weatherInfo = document.getElementById("weather-info");
    const errorMessage = document.getElementById("error-message");


    getWeatherBtn.addEventListener("click", async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        const weatherData = await fetchWeatherData(city);
        displayWeatherData(weatherData);
    })

    async function fetchWeatherData(city) {
        const url = `/.netlify/functions/getWeather?city=${encodeURIComponent(city)}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error("City not found");
            }

            const data = await response.json();
            return data;

        } catch (error) {
            showError();
            return null;
        }
    }

    function displayWeatherData(data) {
        const {name, main, weather} = data;
        cityNameDisplay.textContent = name;

        // unlock the display
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
        temperatureDisplay.textContent = `Temperature: ${main.temp}`;
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`;
    }

    function showError() {
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    }


});
