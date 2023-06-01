import { kelvinCelsius, visibility, byId, timeStamp } from './utils.js';

export function tempNow(res) {
    const cityLocate = document.getElementById('cityLocate');
    const temp       = document.getElementById('temp');
    const tempMaxMix = document.getElementById('tempMaxMin');
    const humidity   = document.getElementById('humidity');
    const clouds     = document.getElementById('clouds');
    
    cityLocate.textContent = res.name +' '+ res.sys.country;
    temp.innerHTML = `
      <h1 id="temp" class="h1-temp">
        ${kelvinCelsius(res.main.feels_like).toFixed(0)}
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
    const airAqi = document.getElementById('air-aqi');
    airAqi.textContent = res.list[0].main.aqi;

    const airComponents = byId('air-components');
    airComponents.innerHTML = `
        <div class="info-num">
            <p class="p-info-num">${res.list[0].components.pm2_5}</p>

            <span class="span-info-num">PM2.5</span>
        </div>

        <div class="info-num">
            <p class="p-info-num">${res.list[0].components.co}</p>

            <span class="span-info-num">CO</span>
        </div>

        <div class="info-num">
            <p class="p-info-num">${res.list[0].components.so2}</p>

            <span class="span-info-num">SO2</span>
        </div>

        <div class="info-num">
            <p class="p-info-num">${res.list[0].components.pm10}</p>

            <span class="span-info-num">PM10</span>
        </div>

        <div class="info-num">
            <p class="p-info-num">${res.list[0].components.o3}</p>

            <span class="span-info-num">O₃</span>
        </div>    
    `
}

export function visible(res) {
    const visible = document.getElementById('visible')

    visible.innerHTML = `
        <div>
            <h1>${visibility(res.visibility).toFixed(0)}</h1>
            <b>km/h</b>
        </div>
    `
}
    

export function sunTime(res) {
    const coords = document.getElementById('coordenadas');

    coords.innerHTML = `
        <div style="${sttleDivCoords}">
            <strong style="${styleCoords}">Nacer do sol: </strong> 
            <p style="${stylePCoords}">${timeStamp(res.sys.sunrise)} Am</p>
        </div>

        <div style="${sttleDivCoords}">
            <strong style="${styleCoords}">Pôr do sol: </strong> 
            <p style="${stylePCoords}">${timeStamp(res.sys.sunset)} Tr</p>
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

    res.list.map((list) => {
        console.log(list);
        const article = document.createElement('article');
        article.classList.add('days');

        article.innerHTML = `
            <header class="h-days">
            <h3 class="h3-days">${list.weather[0].description}</h3>
            </header>

            <section class="main-days">
                <img src="https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png" />                      
            </section>

            <footer class="foo-days">
                <p class="foo-p-days">${list.main.temp_max.toFixed()}° <span class="s-foo-days">${list.main.temp_min.toFixed()}°</span></p>
                <small>${list.dt_txt}</small>
            </footer>
        `
        weather.append(article);
    })
}