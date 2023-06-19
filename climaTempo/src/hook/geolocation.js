const geo = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        console.log(pos.coords.latitude, pos.coords.longitude)
      })
    }
  }
  //geo()