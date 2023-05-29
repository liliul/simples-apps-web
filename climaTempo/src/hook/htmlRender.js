import { kelvinCelsius, visibility } from './utils.js';

export function tempNow(res) {
    const cityLocate = document.getElementById('cityLocate');
    const temp       = document.getElementById('temp');
    const tempMaxMix = document.getElementById('tempMaxMin');
    const humidity   = document.getElementById('humidity');
    const clouds     = document.getElementById('clouds');
    
    cityLocate.textContent = res.name +' '+ res.sys.country;
    temp.innerHTML = `
      <h1 id="temp" class="h1-temp">
        ${kelvinCelsius(res.main.temp).toFixed(0)}
        <span class="span-temp">°C</span>
      </h1>
    `
    // temp.innerHTML = ` ${kelvinCelsius(res.main.temp).toFixed(0)}`;
    // temp.textContent = kelvinCelsius(res.main.temp).toFixed(0);
    tempMaxMix.textContent = kelvinCelsius(res.main.temp_max).toFixed(0) +'°'+' '+ kelvinCelsius(res.main.temp_min).toFixed(0) +'°';
  
    const windSpeed = document.getElementById('windSpeed');
  
    windSpeed.textContent = res.wind.speed.toFixed(0) + 'km/h';
    humidity.textContent  = res.main.humidity + '%';
    clouds.textContent    = res.clouds.all + '%'
}

// function tempNow(name, sys, [main], wind) {
//   const cityLocate = document.getElementById('cityLocate');
//   const temp       = document.getElementById('temp');
//   const tempMaxMix = document.getElementById('tempMaxMin');
  
//   cityLocate.textContent = name +' '+ sys;
//   temp.textContent       = main;
//   tempMaxMix.textContent = main +'°'+' '+ main +'°';

//   const windSpeed = document.getElementById('windSpeed');

//   windSpeed.textContent = wind + 'km/h';
// }

export function airQuality(res) {
    const visible = document.getElementById('visible')

    visible.textContent = visibility(res.visibility);
}