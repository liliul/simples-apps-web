//  https://openweathermap.org/current
//  https://openweathermap.org/current#multi
//  https://home.openweathermap.org/api_keys
//  romero ark sirome4179@farebus.com senha:romero1234?

import { 
  TOKEN_API_OPEN_WEATHER, 
  URL_API_OPEN_WEATHER, 
  APPID_TOKEN,
  LANG,
  URL_AR, 
  URL_FORECAST
} from './token.js';

import { tempNow, airQuality, visible ,sunTime, weather, openWeatherMap } from './htmlRender.js';

const city = 'curitiba';
const lang = 'pt_br';

const inputSearchCity  = document.getElementById('input-search-city');
const buttonSearchCity = document.getElementById('button-search-city');


buttonSearchCity.addEventListener('click', searchCity);
inputSearchCity.addEventListener('keydown', (e) => {
  
  if(e.key === "Enter") {
    searchCity()
  }
})

function searchCity() {
  if(!inputSearchCity.value) return
  sessionStorage.setItem("searchCity", inputSearchCity.value);
  
  // if(!inputSearchCity.value) return getApi(city), getApiDaysTemp(city)
  window.location.reload(false)
  
  // getApi(inputSearchCity.value)
  // getApiDaysTemp(inputSearchCity.value)
  // inputSearchCity.value = ""
  //  console.log(window.location.hostname)
}
toCall()
function toCall() {
  const getItemSearchCity = sessionStorage.getItem("searchCity")
  console.log(getItemSearchCity);

  if(getItemSearchCity == null) return
  
  getApi(getItemSearchCity)
  getApiDaysTemp(getItemSearchCity)
  
}

async function getApi(city) {
  const req = await fetch(`${URL_API_OPEN_WEATHER}${city}${APPID_TOKEN}${TOKEN_API_OPEN_WEATHER}${LANG}${lang}`)
  const res = await req.json();
  if(!req.ok) return

  console.log(res)

  tempNow(res)
  visible(res)
  sunTime(res)

  openWeatherMap(res)

  getApiAirQuality(res.coord.lat,res.coord.lon,res.sys.sunrise,res.sys.sunset)

}
// getApi(city)

async function getApiAirQuality(lat, lon,sunrise,sunset) {
  const req = fetch(`${URL_AR}lat=${lat}&lon=${lon}&start=${sunrise}&end=${sunset}${APPID_TOKEN}${TOKEN_API_OPEN_WEATHER}&lang=${lang}`);
  const res = await (await req).json();

  // console.log(res);

  airQuality(res)
}
//getApiAirQuality()

async function getApiDaysTemp(city) {
  const req = await fetch(`${URL_FORECAST}${city}&cnt=8&appid=${TOKEN_API_OPEN_WEATHER}&units=metric&lang=${lang}`);
  const res = await req.json();
  if(!req.ok) {
    throw Error(res.statusText), alert('Nome de cidade Invalida', window.location.reload(true))
  }
  

  // console.log(res)
  return weather(res)
}
// getApiDaysTemp('curitiba')
