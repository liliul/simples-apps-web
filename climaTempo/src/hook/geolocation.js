const geo = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        console.log(pos.coords.latitude, pos.coords.longitude)

         
      })
    }
  }
  //geo()

  async function getApis() {
    const [reqApi1, reqApi2] = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=9033de8545dfa66184beaa29576f414b&units=metric&lang=pt_br`),
      fetch(),
    ])
  }