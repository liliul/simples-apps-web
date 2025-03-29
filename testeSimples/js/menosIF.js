// const cor = {
//     red: "red",
//     blue: "blue",
//     orange: "orange",
//     black: "black",
//     white: "white"
// }

// function retornarCor(cor) {
//     return cor ?? "Cor null"
// }

// const verCor = retornarCor(cor.blue)

// console.log(verCor);




function retornarCor(cor) {
    const cores = {
        red: "red",
        blue: "blue",
        orange: "orange",
        black: "black",
        white: "white"
    }

    return cores[cor] ?? "Cor null"
}

const verCor = retornarCor('orange')

console.log(verCor);