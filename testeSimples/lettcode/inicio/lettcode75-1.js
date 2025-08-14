// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// var mergeAlternately = function(word1, word2) {
//     let db = []
//     let l1 = word1.charAt(0)
//     let l2 = word2.charAt(0)
//     let l3 = word1.charAt(1)
//     let l4 = word2.charAt(1)
//     let l5 = word1.charAt(2)
//     let l6 = word2.charAt(2)

//     db.push(l1, l2, l3, l4, l5, l6)
//     // console.log(db)

//     return db.join('')
// };

// const letra = mergeAlternately('abc', 'pqr')
// console.log(letra);


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let db = []
    
    for (let l1=0; l1<word1.length || l1<word2.length; l1++) {

        if(l1 < word1.length) db.push(word1[l1])
        if(l1 < word2.length) db.push(word2[l1])
    }

    console.log(db)

    return db.join('')
};

const letra1 = mergeAlternately('abc', 'pqr')
const letra2 = mergeAlternately('ab', 'pqrs') 
const letra3 = mergeAlternately('abcd', 'pq') 
console.log(letra1)
console.log(letra2)
console.log(letra3)