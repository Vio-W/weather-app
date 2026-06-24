(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`
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
  </svg>`,t=`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-2A5 5 0 0 0 6.5 19h11z"/>
  </svg>`,n=`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
    <path d="M16 13.5a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.4-1.5A4.5 4.5 0 0 0 6.5 13.5H16z"/>
    <line x1="8" y1="16.5" x2="7" y2="20"/>
    <line x1="12" y1="16.5" x2="11" y2="20"/>
    <line x1="16" y1="16.5" x2="15" y2="20"/>
  </svg>`,r=`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
    <path d="M16 13.5a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.4-1.5A4.5 4.5 0 0 0 6.5 13.5H16z"/>
    <polyline points="12 14.5 9.5 18.5 12.5 18.5 10.5 22" fill="none"/>
  </svg>`,i=`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
    <path d="M16 13a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.4-1.5A4.5 4.5 0 0 0 6.5 13H16z"/>
    <line x1="8" y1="16.5" x2="8" y2="20.5"/>
    <line x1="6.2" y1="18.5" x2="9.8" y2="18.5"/>
    <line x1="16" y1="16.5" x2="16" y2="20.5"/>
    <line x1="14.2" y1="18.5" x2="17.8" y2="18.5"/>
  </svg>`,a=`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="w-full h-full">
    <line x1="3" y1="8" x2="21" y2="8"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
    <line x1="3" y1="16" x2="21" y2="16"/>
  </svg>`,o={Clear:e,Clouds:t,Rain:n,Drizzle:n,Thunderstorm:r,Snow:i,Mist:a,Smoke:a,Haze:a,Dust:a,Fog:a,Sand:a,Ash:a,Squall:a,Tornado:a},s={Clear:`text-amber-400`,Clouds:`text-slate-300`,Rain:`text-blue-400`,Drizzle:`text-blue-300`,Thunderstorm:`text-violet-400`,Snow:`text-sky-200`,Mist:`text-slate-400`,Smoke:`text-slate-400`,Haze:`text-slate-400`,Dust:`text-slate-400`,Fog:`text-slate-400`,Sand:`text-slate-400`,Ash:`text-slate-400`,Squall:`text-slate-400`,Tornado:`text-slate-400`};function c(e){return o[e]||t}function l(e){return s[e]||`text-slate-300`}var u=document.querySelector(`#city-input`),d=document.querySelector(`#weather-search-btn`),f=document.querySelector(`#search-error`),p=document.querySelector(`#weather-card`),m=document.querySelector(`#search-result`),h=document.querySelector(`#reset-btn`),g=document.querySelector(`#hero-panel`),_=document.querySelector(`#spotlight`),v=document.querySelector(`#fan-center`),y=`de2c323266993cb12b1a26bd70d54ab5`,b=`https://api.openweathermap.org/data/2.5/weather`;d.addEventListener(`click`,x),u.addEventListener(`keydown`,e=>{e.key===`Enter`&&x()});function x(){let e=u.value.trim();e&&(w(),S(e))}h.addEventListener(`click`,()=>{m.classList.add(`hidden`),p.classList.remove(`hidden`),u.value=``,u.focus()});async function S(e){try{let t=await fetch(`${b}?q=${e}&appid=${y}&units=metric`);if(!t.ok)throw Error(t.status===404?`City not found — check the spelling and try again.`:`Something went wrong. Please try again.`);E(await t.json())}catch(e){C(e.message)}}function C(e){f.textContent=e,f.classList.remove(`hidden`)}function w(){f.textContent=``,f.classList.add(`hidden`)}function T(e,t,n=700){let r=performance.now();function i(a){let o=Math.min((a-r)/n,1),s=1-(1-o)**3;e.textContent=`${Math.round(t*s)}°`,o<1&&requestAnimationFrame(i)}requestAnimationFrame(i)}function E(e){let{name:t,main:n,weather:r,wind:i}=e,a=Math.round(n.temp),o=Math.round(n.feels_like),s=r[0].main,u=r[0].description,d=document.querySelector(`#result-icon`);d.className=`w-12 h-12 sm:w-14 sm:h-14 mx-auto ${l(s)}`,d.innerHTML=c(s),T(document.querySelector(`#result-temp`),a),document.querySelector(`#result-city`).textContent=t,document.querySelector(`#result-condition`).textContent=u,document.querySelector(`#result-feels`).textContent=`${o}°`,document.querySelector(`#result-humidity`).textContent=`${n.humidity}%`,document.querySelector(`#result-wind`).textContent=`${i.speed} m/s`,p.classList.add(`hidden`),m.classList.remove(`hidden`)}g.addEventListener(`mousemove`,e=>{let t=g.getBoundingClientRect();_.style.setProperty(`--x`,`${e.clientX-t.left}px`),_.style.setProperty(`--y`,`${e.clientY-t.top}px`),_.style.opacity=`1`}),g.addEventListener(`mouseleave`,()=>{_.style.opacity=`0`}),v.addEventListener(`mousemove`,e=>{let t=v.getBoundingClientRect(),n=e.clientX-t.left,r=(e.clientY-t.top-t.height/2)/t.height*-14,i=(n-t.width/2)/t.width*14;v.style.transform=`scale(1.15) rotateX(${r}deg) rotateY(${i}deg)`}),v.addEventListener(`mouseleave`,()=>{v.style.transform=``});