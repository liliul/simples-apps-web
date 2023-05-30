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

export function weather(res) {
    const weather = document.getElementById('weather');

    weather.innerHTML = `
        <header class="h-days">
        <h3 class="h3-days">Amanhã</h3>
        </header>

        <section class="main-days">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.6578 29.3111C56.6382 29.3111 56.6197 29.3168 56.6 29.3168C56.9639 28.4777 57.1675 27.5504 57.1675 26.5747C57.1675 22.7517 54.0682 19.6512 50.2444 19.6512C48.8932 19.6512 47.6362 20.0438 46.5707 20.7151C45.1294 17.2107 41.6856 14.7417 37.6627 14.7417C32.3426 14.7417 28.0298 19.0539 28.0298 24.3759C28.0298 24.777 28.0622 25.1695 28.11 25.5592C28.083 25.5592 28.0568 25.5564 28.0298 25.5564C24.4629 25.5564 21.5712 28.4464 21.5712 32.0133C21.5712 35.5803 24.4629 38.4731 28.0298 38.4731H56.6578C59.1877 38.4731 61.2383 36.4223 61.2383 33.8935C61.2383 31.3619 59.1877 29.3111 56.6578 29.3111Z" fill="#C2CEF2"/>
                <path d="M45.1803 35.3383C45.1564 35.3383 45.1345 35.344 45.1107 35.344C45.5493 34.3285 45.7953 33.2107 45.7953 32.0359C45.7953 27.425 42.058 23.6902 37.4479 23.6902C35.8186 23.6902 34.3033 24.1624 33.0185 24.9702C31.2805 20.7462 27.1287 17.768 22.2777 17.768C15.8634 17.768 10.6635 22.9705 10.6635 29.3848C10.6635 29.8684 10.7027 30.3434 10.7604 30.8128C10.7277 30.8128 10.6962 30.8071 10.6635 30.8071C6.36289 30.8071 2.8764 34.2944 2.8764 38.595C2.8764 42.8955 6.36289 46.382 10.6635 46.382H45.1803C48.2305 46.382 50.7032 43.9096 50.7032 40.8595C50.7032 37.8096 48.2305 35.3383 45.1803 35.3383Z" fill="white"/>
            </svg>                        
        </section>

        <footer class="foo-days">
            <p class="foo-p-days">21° <span class="s-foo-days">16°</span></p>
        </footer>
    `
}