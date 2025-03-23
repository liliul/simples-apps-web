function Diagonal(params) {
    let leftDiagonal = 0
    let rightDiagonal = 0

    for (let index = 0; index < params.length; index += 1) {
        leftDiagonal += params[index][index]
        rightDiagonal += params[index][params[index].length - 1 - index]
    }

    return [leftDiagonal, rightDiagonal]
}

const resultado = Diagonal([[1,2,3],[4,5,6],[7,8,9]])
console.log(resultado);
