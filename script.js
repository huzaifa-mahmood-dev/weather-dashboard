// ============================================
// WEATHER DASHBOARD — MAIN LOGIC
// ============================================

// 1. Grab the DOM elements we need
const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const statusEl = document.getElementById("status");
const weatherEl = document.getElementById("weather");

const cityNameEl = document.getElementById("city-name");
const descriptionEl = document.getElementById("weather-description");
const iconEl = document.getElementById("weather-icon");
const temperatureEl = document.getElementById("temperature");
const feelsLikeEl = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const pressureEl = document.getElementById("pressure");

// 2. Handle the form submission
form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Stop the page from reloading

  const city = cityInput.value.trim();

  if (!city) {
    showStatus("Please enter a city name.", "error");
    return;
  }

  await fetchWeather(city);
});

// 3. Fetch weather data from OpenWeatherMap
async function fetchWeather(city) {
  showStatus("Loading weather...", "loading");
  weatherEl.hidden = true;

  // Build the URL with our config values
  const url = `${CONFIG.BASE_URL}?q=${encodeURIComponent(city)}&appid=${CONFIG.API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      // Handle common errors with friendly messages
      if (response.status === 404) {
        throw new Error("City not found. Please check the spelling and try again.");
      }
      if (response.status === 401) {
        throw new Error("API key invalid or not yet activated. Please wait a few minutes.");
      }
      throw new Error("Something went wrong. Please try again later.");
    }

    const data = await response.json();
    displayWeather(data);
    showStatus(""); // Clear status on success

  } catch (error) {
    showStatus(error.message, "error");
  }
}

// 4. Display the weather data on screen
function displayWeather(data) {
  // Location
  cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
  descriptionEl.textContent = data.weather[0].description;

  // Icon — OpenWeatherMap provides icons via their CDN
  iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  iconEl.alt = data.weather[0].description;

  // Main temperature
  temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;

  // Details
  feelsLikeEl.textContent = `${Math.round(data.main.feels_like)}°C`;
  humidityEl.textContent = `${data.main.humidity}%`;
  windEl.textContent = `${data.wind.speed} m/s`;
  pressureEl.textContent = `${data.main.pressure} hPa`;

  // Show the weather card
  weatherEl.hidden = false;
}

// 5. Helper to show status messages (loading, error, etc.)
function showStatus(message, type = "") {
  statusEl.textContent = message;
  statusEl.className = "status";
  if (type) {
    statusEl.classList.add(`status--${type}`);
  }
}