// matrix 

// for (let i=0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log('i: ',i, ' j: ',j);
    
//     }
// }



// matrix
let matrixLetras = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'I', 'J'],
    ['L', 'H', 'P'],
    ['O', 'M', 'N']
]

for (let i = 0; i < matrixLetras.length; i++) {

    for (let j = 0; j < matrixLetras[i].length; j++) {
        console.log(matrixLetras[i][j]);
        
        if (matrixLetras[i][j] == 'B') {
            console.log('sim');
        }

        if (matrixLetras[i][j] == 'G') {
            console.log('sim');
            
        }
    }
}

// console.log(matrixLetras);
