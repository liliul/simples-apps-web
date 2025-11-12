// function bigO(arr) {
//     let db = []
//     let num = []

//     for (let i=0; i< arr.length; i++) {
//         // console.log(i);
//         db.push(arr[i])
//         num.push(i)
//     }

//     // sorteando index do array na let num
//     const sortaIndexArr = num.sort((a, b) => b - a)
//     console.log(sortaIndexArr)
    
//     // usando map para converte sortaIndexArr de array para number
//     sortaIndexArr.map((i) => {
//         console.log(i);

//         // retornando o index de sortaIndexArr no db
//         return console.log(db[i])
//     })
   
//     return db
// }

// const ver = bigO(['asdasd','bbbbb','kkkkk'])
// console.log(ver.join(''));

// -----------------------------

function bigO(index1, index2, index3) {
  let arr = ['asdasd','bbbbb','kkkkk']

  console.log(arr[index1], arr[index2], arr[index3])

  return arr
}

bigO(1,2,0)
// -----------------------------

// function bigO(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(i, arr[i]);
//   }
//   return arr;
// }
// bigO(['asdasd','bbbbb','kkkkk'])
