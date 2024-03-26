// interface Api {
//    gender: string
//    email: string
//    cell: string
//    phone: string
//    name: string
//    picture: string
//    id: string
//    nat: string
//    dob: number | string
//    location: string
// }

interface Api {
   cell: string;
   dob: {
      age: number;
   };
   email: string;
   gender: string;
   id: {
      value: string;
   };
   location: {
      city: string;
      country: string;
      state: string;
   };
   name: {
      title: string;
      first: string;
      last: string;
   };
   phone: string;
   picture: {
      medium: string;
   };
   nat: string;
}

type urlTipe = Promise<Api[]>

export async function getApiRandomUser(): urlTipe {
   const url: string = 'https://randomuser.me/api/?results=15';

   const req = await fetch(url)
   const res = await req.json()

   return await res.results
}