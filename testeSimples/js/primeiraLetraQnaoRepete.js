let srt = 'google'
let primeiraUnica = ''
let mapLetras = new Map()

for (let i = 0; i < srt.length; i++) {
    const letra = srt.charAt(i).toLocaleLowerCase()

    if (mapLetras.has(letra)) {
        mapLetras.set(letra, mapLetras.get(letra) + 1)
    } else {
        mapLetras.set(letra, 1)
    }
}

for (const [key, value] of mapLetras) {
    if (value == 1) {
        console.log(key)
        break
    }
}