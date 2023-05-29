//  https://openweathermap.org/current
//  https://openweathermap.org/current#multi
//  https://home.openweathermap.org/api_keys
//  romero ark sirome4179@farebus.com senha:romero1234?

async function getApi() {
  const req = await fetch(url)
  const res = await req.json()
  
  console.log(res)
}
