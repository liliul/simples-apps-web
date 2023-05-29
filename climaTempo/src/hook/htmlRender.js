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

const sttleDivCoords = `display:flex;align-items:center;gap:10px;`
const styleCoords = `
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    color: white;
`
const stylePCoords = `
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    color:#dad8f7;
`

export function sunTime(res) {
    const coords = document.getElementById('coordenadas');

    coords.innerHTML = `
        <div style="${sttleDivCoords}">
            <strong style="${styleCoords}">Latitude: </strong> 
            <p style="${stylePCoords}">${res.coord.lat}</p>
        </div>

        <div style="${sttleDivCoords}">
            <strong style="${styleCoords}">Longitude: </strong> 
            <p style="${stylePCoords}">${res.coord.lon}</p>
        </div>
    `
} 