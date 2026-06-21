import './style.css';

// 1. Grab our DOM Elements
const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#weather-search-btn');
const fanCard = document.querySelector('#weather-card');
const searchResult = document.querySelector('#search-result');
const resetBtn = document.querySelector('#reset-btn');

// 2. OpenWeatherMap Configuration — pulled from .env
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// 3. Listen for the Search button click
searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeatherData(city);
  }
});

// 4. Also listen for the "Enter" key inside the input box for better UX
cityInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const city = cityInput.value.trim();
    if (city) {
      getWeatherData(city);
    }
  }
});

// 5. "Search another city" — swap back to the decorative fan
resetBtn.addEventListener('click', () => {
  searchResult.classList.add('hidden');
  fanCard.classList.remove('hidden');
  cityInput.value = '';
  cityInput.focus();
});

// 6. Core Data Fetching Function
async function getWeatherData(city) {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);

    if (!response.ok) {
      throw new Error('City not found. Please try again!');
    }

    const data = await response.json();
    displayWeather(data);

  } catch (error) {
    alert(error.message);
  }
}

// 7. Maps OpenWeatherMap's condition text to an emoji
function getWeatherEmoji(condition) {
  const map = {
    Clear: '☀️',
    Clouds: '☁️',
    Rain: '🌧️',
    Drizzle: '🌦️',
    Thunderstorm: '⛈️',
    Snow: '❄️',
    Mist: '🌫️',
    Fog: '🌫️',
    Haze: '🌫️',
  };
  return map[condition] || '🌡️';
}

// 8. Swap the fan out for the real search result, populated with live data
function displayWeather(data) {
  const { name, main, weather, wind } = data;
  const temp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  const condition = weather[0].main;
  const description = weather[0].description;

  document.querySelector('#result-icon').textContent = getWeatherEmoji(condition);
  document.querySelector('#result-temp').textContent = `${temp}°`;
  document.querySelector('#result-city').textContent = name;
  document.querySelector('#result-condition').textContent = description;
  document.querySelector('#result-feels').textContent = `${feelsLike}°`;
  document.querySelector('#result-humidity').textContent = `${main.humidity}%`;
  document.querySelector('#result-wind').textContent = `${wind.speed} m/s`;

  fanCard.classList.add('hidden');
  searchResult.classList.remove('hidden');
}