export async function getApiRandomUser() {
   const url = new URL('https://randomuser.me/api/?results=15');

   const req = await fetch(url)
   const res = await req.json()

   return await res.results
}