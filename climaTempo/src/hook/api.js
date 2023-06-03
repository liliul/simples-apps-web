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
} from './token.js';

import { tempNow, airQuality, visible ,sunTime, weather, openWeatherMap } from './htmlRender.js';

const city = 'curitiba';
const lang = 'pt_br';

async function getApi() {
  const req = await fetch(`${URL_API_OPEN_WEATHER}${city}${APPID_TOKEN}${TOKEN_API_OPEN_WEATHER}${LANG}${lang}`)
  const res = await req.json()
  console.log(res)

  tempNow(res)
  visible(res)
  sunTime(res)

  openWeatherMap(res)

  getApiAirQuality(res.coord.lat,res.coord.lon,res.sys.sunrise,res.sys.sunset)

}
getApi()

async function getApiAirQuality(lat, lon,sunrise,sunset) {
  const req = fetch(`${URL_AR}lat=${lat}&lon=${lon}&start=${sunrise}&end=${sunset}${APPID_TOKEN}${TOKEN_API_OPEN_WEATHER}&lang=${lang}`);
  const res = await (await req).json();

  // console.log(res);

  airQuality(res)
}
//getApiAirQuality()

async function getApiDaysTemp() {
  const req = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=curitiba&cnt=8&appid=9033de8545dfa66184beaa29576f414b&units=metric&lang=pt_br`)
  const res = await req.json();

  // console.log(res)
  weather(res)
}
getApiDaysTemp()



function searchCity(res) {
  const inputSearchCity  = document.getElementById('input-search-city');
  const buttonSearchCity = document.getElementById('button-search-city');

}