const url = new URL('https://randomuser.me/api/?results=15');

export function getApiRandomUser() {
   fetch(url)
   .then((response) =>  response.json())
   .then((data) => {
    console.log(data.results)
   })
    
} 
getApiRandomUser()