import {
  TOKEN_API_OPEN_WEATHER,  
  APPID_TOKEN,
  URL_AR
} from './token.js';

const geo = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        console.log(pos.coords.latitude, pos.coords.longitude)

         
      })
    }
  }
  //geo()

  async function getApis(lat, lon) {
    const [reqApi1, reqApi2, reqApi3] = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${TOKEN_API_OPEN_WEATHER}&units=metric&lang=pt_br`),
      fetch(`${URL_AR}lat=${lat}&lon=${lon}${APPID_TOKEN}${TOKEN_API_OPEN_WEATHER}&lang=pt_br`),
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPID_TOKEN}&units=metric&lang=pt_br`),
    ])
  }