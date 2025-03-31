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


class RetornarObjeto {
    constructor(object) {
        this.object = object
    }

    Chamar() {
        const json = {
            toyota: "Hilux",
            nissan: "Skyline GTR",
            bmw: "M2 bmw"
        }

        return json[this.object] ?? 'Retorno NULL'
    }

}

const class1 = new RetornarObjeto('nissan1')
console.log(class1.Chamar());
