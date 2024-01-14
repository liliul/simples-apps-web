import { TOKEN_API_OPEN_WEATHER, APPID_TOKEN, URL_AR } from './token.js';

import { tempNow, airQuality, visible ,sunTime, weather, openWeatherMap } from './htmlRender.js';

/**
 * @function geo
 * @returns {object} // geolocation do navegador
 * */
export const geo = () => {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function(pos) {
      
      await getApis(pos.coords.latitude, pos.coords.longitude)
    })
  }
}

/**
 * @description função getApis // pega dados da api openweathermap como o ar, clima, e clima em 3 e 3 horas 
 * 
 * @param {string} lat lon // latitude e longitude
 * @returns {object} parametros lat lon da geolocation
 * */
async function getApis(lat, lon) {
  const [reqApi1, reqApi2, reqApi3] = await Promise.all([
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${TOKEN_API_OPEN_WEATHER}&lang=pt_br`),
    fetch(`${URL_AR}lat=${lat}&lon=${lon}${APPID_TOKEN}${TOKEN_API_OPEN_WEATHER}&lang=pt_br`),
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=8&appid=${TOKEN_API_OPEN_WEATHER}&units=metric&lang=pt_br`),
  ])

  const resApi1 = await reqApi1.json();
  const resApi2 = await reqApi2.json();
  const resApi3 = await reqApi3.json();

  renderHtml(resApi1, resApi2, resApi3);
}

/**
 * @discription função que pega as features do climaTempo e passa informações da api openweathermap atravez dos parametros
 * 
 * @param {object} resApi1 resApi2 resApi3 // parametros que recebe dados da api openweathermap
 * @returns {elementHtml} features que renderiza html
 * */
function renderHtml(resApi1, resApi2, resApi3) {
  tempNow(resApi1)
  airQuality(resApi2)
  visible(resApi1)
  sunTime(resApi1)   
  openWeatherMap(resApi1)
  weather(resApi3)
}