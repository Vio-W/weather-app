import './style.css';
import { getWeatherIcon, getWeatherColor } from './icons.js';

// --- DOM elements ---
const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#weather-search-btn');
const searchError = document.querySelector('#search-error');
const fanCard = document.querySelector('#weather-card');
const searchResult = document.querySelector('#search-result');
const resetBtn = document.querySelector('#reset-btn');
const heroPanel = document.querySelector('#hero-panel');
const spotlight = document.querySelector('#spotlight');
const centerCard = document.querySelector('#fan-center');

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// --- Search ---
searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});

function handleSearch() {
  const city = cityInput.value.trim();
  if (city) {
    clearError();
    getWeatherData(city);
  }
}

resetBtn.addEventListener('click', () => {
  searchResult.classList.add('hidden');
  fanCard.classList.remove('hidden');
  cityInput.value = '';
  cityInput.focus();
});

async function getWeatherData(city) {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error(
        response.status === 404
          ? 'City not found — check the spelling and try again.'
          : 'Something went wrong. Please try again.'
      );
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    showError(error.message);
  }
}

function showError(message) {
  searchError.textContent = message;
  searchError.classList.remove('hidden');
}

function clearError() {
  searchError.textContent = '';
  searchError.classList.add('hidden');
}

// Counts a number up from 0 to target with an ease-out curve
function animateNumber(el, target, duration = 700) {
  const startTime = performance.now();
  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = `${Math.round(target * eased)}°`;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function displayWeather(data) {
  const { name, main, weather, wind } = data;
  const temp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  const condition = weather[0].main;
  const description = weather[0].description;

  const resultIcon = document.querySelector('#result-icon');
  resultIcon.className = `w-12 h-12 sm:w-14 sm:h-14 mx-auto ${getWeatherColor(condition)}`;
  resultIcon.innerHTML = getWeatherIcon(condition);

  animateNumber(document.querySelector('#result-temp'), temp);
  document.querySelector('#result-city').textContent = name;
  document.querySelector('#result-condition').textContent = description;
  document.querySelector('#result-feels').textContent = `${feelsLike}°`;
  document.querySelector('#result-humidity').textContent = `${main.humidity}%`;
  document.querySelector('#result-wind').textContent = `${wind.speed} m/s`;

  fanCard.classList.add('hidden');
  searchResult.classList.remove('hidden');
}

// --- Cursor spotlight across the hero panel ---
heroPanel.addEventListener('mousemove', (e) => {
  const rect = heroPanel.getBoundingClientRect();
  spotlight.style.setProperty('--x', `${e.clientX - rect.left}px`);
  spotlight.style.setProperty('--y', `${e.clientY - rect.top}px`);
  spotlight.style.opacity = '1';
});
heroPanel.addEventListener('mouseleave', () => {
  spotlight.style.opacity = '0';
});

// --- 3D tilt on the center fan card ---
centerCard.addEventListener('mousemove', (e) => {
  const rect = centerCard.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rotateX = ((y - rect.height / 2) / rect.height) * -14;
  const rotateY = ((x - rect.width / 2) / rect.width) * 14;
  centerCard.style.transform = `scale(1.15) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
centerCard.addEventListener('mouseleave', () => {
  centerCard.style.transform = '';
});