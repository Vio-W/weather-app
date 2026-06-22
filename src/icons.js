// Hand-built line icons so weather symbols match the UI's stroke-based
// aesthetic instead of relying on inconsistent OS emoji rendering.

export const sunIcon = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="w-full h-full">
    <circle cx="12" cy="12" r="4.5"/>
    <line x1="12" y1="2.5" x2="12" y2="5"/>
    <line x1="12" y1="19" x2="12" y2="21.5"/>
    <line x1="4.2" y1="4.2" x2="5.9" y2="5.9"/>
    <line x1="18.1" y1="18.1" x2="19.8" y2="19.8"/>
    <line x1="2.5" y1="12" x2="5" y2="12"/>
    <line x1="19" y1="12" x2="21.5" y2="12"/>
    <line x1="4.2" y1="19.8" x2="5.9" y2="18.1"/>
    <line x1="18.1" y1="5.9" x2="19.8" y2="4.2"/>
  </svg>`;

export const cloudIcon = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-2A5 5 0 0 0 6.5 19h11z"/>
  </svg>`;

export const rainIcon = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
    <path d="M16 13.5a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.4-1.5A4.5 4.5 0 0 0 6.5 13.5H16z"/>
    <line x1="8" y1="16.5" x2="7" y2="20"/>
    <line x1="12" y1="16.5" x2="11" y2="20"/>
    <line x1="16" y1="16.5" x2="15" y2="20"/>
  </svg>`;

export const thunderIcon = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
    <path d="M16 13.5a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.4-1.5A4.5 4.5 0 0 0 6.5 13.5H16z"/>
    <polyline points="12 14.5 9.5 18.5 12.5 18.5 10.5 22" fill="none"/>
  </svg>`;

export const snowIcon = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
    <path d="M16 13a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.4-1.5A4.5 4.5 0 0 0 6.5 13H16z"/>
    <line x1="8" y1="16.5" x2="8" y2="20.5"/>
    <line x1="6.2" y1="18.5" x2="9.8" y2="18.5"/>
    <line x1="16" y1="16.5" x2="16" y2="20.5"/>
    <line x1="14.2" y1="18.5" x2="17.8" y2="18.5"/>
  </svg>`;

export const mistIcon = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="w-full h-full">
    <line x1="3" y1="8" x2="21" y2="8"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
    <line x1="3" y1="16" x2="21" y2="16"/>
  </svg>`;

// OpenWeatherMap's "main" condition field -> icon
const iconMap = {
  Clear: sunIcon,
  Clouds: cloudIcon,
  Rain: rainIcon,
  Drizzle: rainIcon,
  Thunderstorm: thunderIcon,
  Snow: snowIcon,
  Mist: mistIcon, Smoke: mistIcon, Haze: mistIcon, Dust: mistIcon,
  Fog: mistIcon, Sand: mistIcon, Ash: mistIcon, Squall: mistIcon, Tornado: mistIcon,
};

// Matching accent color per condition, used as a Tailwind text-color class
const colorMap = {
  Clear: 'text-amber-400',
  Clouds: 'text-slate-300',
  Rain: 'text-blue-400',
  Drizzle: 'text-blue-300',
  Thunderstorm: 'text-violet-400',
  Snow: 'text-sky-200',
  Mist: 'text-slate-400', Smoke: 'text-slate-400', Haze: 'text-slate-400',
  Dust: 'text-slate-400', Fog: 'text-slate-400', Sand: 'text-slate-400',
  Ash: 'text-slate-400', Squall: 'text-slate-400', Tornado: 'text-slate-400',
};

export function getWeatherIcon(condition) {
  return iconMap[condition] || cloudIcon;
}

export function getWeatherColor(condition) {
  return colorMap[condition] || 'text-slate-300';
}