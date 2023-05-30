//  https://openweathermap.org/current
//  https://openweathermap.org/current#multi
//  https://home.openweathermap.org/api_keys
//  romero ark sirome4179@farebus.com senha:romero1234?

import { TOKEN_API_OPEN_WEATHER, URL_API_OPEN_WEATHER, APPID_TOKEN, LANG } from './token.js';

import { tempNow, airQuality, sunTime, weather } from './htmlRender.js';

const city = 'curitiba';
const lang = 'pt_br';

async function getApi() {
  const req = await fetch(`${URL_API_OPEN_WEATHER}${city}${APPID_TOKEN}${TOKEN_API_OPEN_WEATHER}${LANG}${lang}`)
  const res = await req.json()
  console.log(res)

  tempNow(res)
  airQuality(res)
  sunTime(res)
  weather(res)
}
getApi()