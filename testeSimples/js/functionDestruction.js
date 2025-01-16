const userInfos = {
    name: "Som",
    sobrenome: "Goku",
    idade: 25,
    type: "Sayajins"
}


function Infos ({sobrenome, type}) {
    return console.log(sobrenome, type)
}

Infos(userInfos)


// map

const nums = [2,3,6,5,9]

const mapArray = nums.map((itens) => {
    return itens * 2
})

console.log('map: ', mapArray)
